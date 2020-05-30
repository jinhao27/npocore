const fs = require("fs");
const path = require("path");
const express = require("express");
const fileupload = require("express-fileupload");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const axios = require("axios");
const passwordHash = require('password-hash');
const { sendEmail } = require("./helper-functions");
const { organizationModel, postModel, passwordResetSessionModel } = require("./models");
const { hourlyBump, postBump, featureBump, referralBump, hourlyDownBump, downBumpOrganizations } = require("./nposcore-functions");

app = express();

// Configuring cookie parser with express
app.use(cookieParser())

// Setting JSON parsing methods for POST request data
app.use(express.urlencoded()); // HTML forms
app.use(express.json()); // API clients
app.use(fileupload()); // FILES

// Setting view rendering engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/static'))
app.engine('html', require('ejs').renderFile);

// Mongoose configuration
const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/npocore";
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
mongoose.set('useFindAndModify', false);

// GLOBAL VARIABLES
const googleApiKey = process.env.GOOGLE_API_KEY;

// INITALIZING ALL BLOCK ELEMENTS
let blockElementsNames = ["imports", "navbar"];
let blockElements = [];
for (var i = 0; i < blockElementsNames.length; i++) {
  fs.readFile(__dirname + `/views/blocks/${blockElementsNames[i]}.html`, "utf-8", (err, data) => {
    if (err) throw err;

    blockElements.push(data);
  });
}

app.use(async (req, res, next) => {
  if (req.cookies.organization) {
    // RESETTING COOKIES
    res.cookie("organization", await organizationModel.findOne({ _id: req.cookies.organization._id }));
  }

  next();
})

app.get("/", (req, res) => {
  res.render("index.html", context={ blockElements, cookies: req.cookies });
});

app.get("/contact", (req, res) => {
  res.render("contact.html", context={ blockElements, cookies: req.cookies });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find({}).sort({ datetimePosted: -1 });

  let featured = {};
  featured.organizations = await organizationModel.find({ featured: true });
  featured.posts = await postModel.find({ featured: true });

  res.render("posts.html", context={ blockElements, cookies: req.cookies, posts, featured });
});

app.get("/posts/:id", async (req, res) => {
  const post = await postModel.findOne({ _id: req.params.id });
  if (post) {
    res.render("post.html", context={ blockElements, cookies: req.cookies, post });
  } else {
    res.send("This post doesn't exist.");
  }
});

app.route("/register")
  .get((req, res) => {
    res.render("register.html", context={ blockElements, cookies: req.cookies, googleApiKey });
  })
  .post(async (req, res) => {
    const data = req.body;

    // SAVING LOGO IF EXISTS
    if (req.files) {
      const logo = req.files.logo;
      if (logo) {
        logo.mv(`${__dirname}/static/media/logos/${logo.name}`, (err) => {
          if (err) throw err;
        });
        data.logo = logo.name;
      }
    }
    // GET LOCATION COORDINATES
    let location = { name: req.body.location };
    if (req.body.location) {
      const locationJson = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.location}&key=${googleApiKey}`);
      if (locationJson.data.results[0]) {
        location = {
          name: req.body.location,
          lat: locationJson.data.results[0].geometry.location.lat,
          lng: locationJson.data.results[0].geometry.location.lng
        }
      }
    }

    data.location = location;

    // HANDLING REFERRER (IF EXISTS)
    const referrer = req.body.referrer;
    if (referrer) {
      const organization = await organizationModel.findOne({ name: referrer });
      if (organization) {
        organizationModel.findOneAndUpdate(
          { name: referrer },
          { npoScore: referralBump(organization.npoScore) },
          { new: true },
          (err, organization) => {
            if (err) throw err;

            sendEmail("NPO Core - Someone referred you!", organization.email, `${data.name} just referred you when registering! Go check it out!`);
          }
        )
      } else {
        res.send("That referrer organization does not exist.");
        return;
      }
    }

    // HASHING PASSWORD
    data.password = passwordHash.generate(req.body.password);

    // ADDING NPO SCORE
    data.npoScore = 50;
    data.bumpedInLastHour = false;

    const newOrganization = new organizationModel(data);
    newOrganization.save((err, organization) => {
      if (err) {
        res.send("That organization name/email already exists. Please use a different one.")
      } else {
        res.cookie("organization", newOrganization);
        res.redirect("/");
      }
    });
  });

app.route("/login")
  .get((req, res) => {
    res.render("login.html", context={ blockElements, cookies: req.cookies });
  })
  .post(async (req, res) => {
    const organization = await organizationModel.findOne({ email: req.body.email });

    if (organization) {
      if (passwordHash.verify(req.body.password, organization.password)) {
        res.cookie("organization", organization);
        res.redirect("/");
      } else {
        res.send("Invalid credentials.");
      }
    } else {
      res.send("Invalid credentials.");
    }
  });

app.get("/logout", (req, res) => {
  res.clearCookie("organization");
  res.redirect("/");
});

app.get("/organizations/map", async (req, res) => {
  const organizations = await organizationModel.find({});
  res.render("map.html", context={ blockElements, cookies: req.cookies, organizations, googleApiKey });
});

app.route("/organizations/:id")
  .get(async (req, res) => {
    const organization = await organizationModel.findOne({ _id: req.params.id }).catch((err) => {
      res.send("That organization does not exist.");
    });

    if (organization) {
      res.render("organization.html", context={ blockElements, cookies: req.cookies, organization });
    } else {
      res.send("That organization does not exist.");
    }
  })
  .post(async (req, res) => {
    const email = req.body.email;
    const organizationId = req.params.id;

    const organization = await organizationModel.findOne({ _id: organizationId });
    if (!organization.subscriptions.includes(email)) {
      organizationModel.findOneAndUpdate(
        { _id: organizationId },
        { $push: { subscriptions: email } },
        { new: true },
        (err, organization) => {
          if (err) throw err;
        }
      )
    }

    res.redirect(`/organizations/${organizationId}`);
  })

app.route("/organizations/:id/post")
  .get((req, res) => {
    // MAKE SURE USER IS LOGGED INTO THIS ORG
    if (req.params.id == req.cookies.organization._id) {
      res.render("make-post.html", context={ blockElements, cookies: req.cookies });
    } else {
      res.send("You do not have permission to view this page.");
    }
  })
  .post((req, res) => {
    // MAKE SURE USER IS LOGGED INTO THIS ORG
    if (req.params.id == req.cookies.organization._id) {
      // CREATE POST
      const post = {
        title: req.body.title,
        content: req.body.content,
        datetimePosted: new Date(),
        creator: req.cookies.organization
      };
      const newPost = new postModel(post);
      newPost.save((err) => { if (err) throw err; });

      // BUMPING NPO SCORE + ADDING POST
      organizationModel.findOneAndUpdate(
        { _id: req.cookies.organization._id },
        { $push: { posts: post }, npoScore: postBump(req.cookies.organization.npoScore) },
        { new: true },
        (err, organization) => {
          if (err) throw err;

          // NOTIFY ALL SUBSCRIPTIONS
          if (organization.subscriptions) {
            for (email of organization.subscriptions) {
              sendEmail(`NPO Core - New post from ${organization.name}`, email, `Check out ${organization.name}'s newest post on NPO Core!\n\nhttp://${req.get("host")}/posts/${newPost._id}`);
            }
          }
        }
      )

      res.redirect("/posts");
    } else {
      res.send("You do not have permission to view this page.");
    }
  });

app.route("/organizations/:id/update")
  .get((req, res) => {
    // MAKE SURE USER IS LOGGED INTO THIS ORG
    if (req.params.id == req.cookies.organization._id) {
      res.render("organization-update.html", context={ blockElements, cookies: req.cookies, organization: req.cookies.organization, googleApiKey });
    } else {
      res.send("You do not have permission to update this organization.");
    }
  })
  .post(async (req, res) => {
    // GET LOCATION COORDINATES
    let location = { name: req.body.location };
    if (req.body.location) {
      const locationJson = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.location}&key=${googleApiKey}`);
      if (locationJson.data.results[0]) {
        location = {
          name: req.body.location,
          lat: locationJson.data.results[0].geometry.location.lat,
          lng: locationJson.data.results[0].geometry.location.lng
        }
      }
    }

    // MAKE SURE USER IS LOGGED INTO THIS ORG
    if (req.params.id == req.cookies.organization._id) {
      let updateObject = {
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
        gender: req.body.gender,
        cause: req.body.cause,
        interests: req.body.interests,
        location
      }

      // SAVING LOGO IF EXISTS
      if (req.files) {
        const logo = req.files.logo;
        if (logo) {
          logo.mv(`${__dirname}/static/media/logos/${logo.name}`, (err) => {
            if (err) throw err;
          });

          updateObject.logo = logo.name;
        }
      }

      organizationModel.findOneAndUpdate(
        { _id: req.cookies.organization._id },
        updateObject,
        { new: true },
        (err, organization) => {
          if (err) throw err;
        }
      )

      res.redirect(`/organizations/${req.cookies.organization._id}`);
    } else {
      res.send("You do not have permission to update this organization.");
    }
  });

app.get("/organizations/:id/verify-nonprofit-status", (req, res) => {
    if (req.params.id == req.cookies.organization._id) {
      if (!req.cookies.organization.verifiedNonprofit) {
        res.render("verify-nonprofit-status.html", context={ blockElements, cookies: req.cookies, googleApiKey });
      } else {
        res.send("You are already a verified 501(c)(3) nonprofit!");
      }
    } else {
      res.send("You don't have permission to view this page.");
    }
  });


require("./routes/api")(app);
require("./routes/forgot-password")(app);


setInterval(function() {
  downBumpOrganizations();
}, 3600000);


// Setting up server for production
const devProduction = true;  // Variable to allow React.js redirects if testing production functionality
if (process.env.NODE_ENV == "production" || devProduction) {
  // Listing /public directory as static
  app.use(express.static(__dirname + "/build"));

  // Redirecting pages not caught by above Express calls to Vue
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + "/build/index.html");
  });
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[+] NPO core server is listening on port ${port}...`);
});
