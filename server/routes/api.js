const mongoose = require("mongoose");
const { organizationModel, postModel, passwordResetSessionModel } = require("../models");
const { hourlyBump, postBump, featureBump, referralBump, hourlyDownBump, downBumpOrganizations } = require("../nposcore-functions");

module.exports = function(app) {

  app.get("/api/get-organizations", async (req, res) => {
    const skip = req.query.skip && /^\d+$/.test(req.query.skip) ? Number(req.query.skip) : 0
    const organizations = await organizationModel.find({}, undefined, { skip, limit: 6 }).sort({ npoScore: -1 });
    res.send(organizations);
  });

  app.get("/api/get-featured-organizations", async (req, res) => {
    const organizations = await organizationModel.find({ featured: true }).sort({ datetimePosted: -1 });
    res.send(organizations);
  });

  app.get("/api/get-organization", async (req, res) => {
    const organization = organizationModel.findOne({
      email: req.query.email,
      password: req.query.password
    });

    return organization;
  });

  app.get("/api/get-posts", async (req, res) => {
    const skip = req.query.skip && /^\d+$/.test(req.query.skip) ? Number(req.query.skip) : 0
    let posts = await postModel.find({}, undefined, { skip, limit: 5 }).sort({ datetimePosted: -1 });
    res.send(posts);
  });

  app.get("/api/get-featured-posts", async (req, res) => {
    const posts = await postModel.find({ featured: true }).sort({ datetimePosted: -1 });
    res.send(posts);
  });

  app.post("/api/delete-post", async (req, res) => {
    const postId = req.query.postId;
    const post = await postModel.findOne({ _id: postId });

    if (post) {
      if (req.cookies.organization && req.cookies.organization._id == post.creator._id) {
        await postModel.deleteOne({ _id: post.id }, (err, post) => {
          if (err) throw err;
        });

        res.status(200).send("Post successfully deleted!");
      } else {
        res.status(400).send("You don't have permission to delete this post.");
      }
    } else {
      res.status(400).send("That post doesn't exist.");
    }
  });

  app.post("/api/bump", async (req, res) => {
    const organization = req.body;

    if (organization._id == req.cookies.organization._id) {
      if (!organization.bumpedInLastHour) {
        await organizationModel.findOneAndUpdate(
          { _id: organization._id },
          { npoScore: hourlyBump(organization.npoScore), bumpedInLastHour: true },
          { new: true },
          (err, organization) => {
            if (err) throw err;
          }
        )

        // RESETTING COOKIES
        res.cookie("organization", await organizationModel.findOne({ _id: organization._id }), { overwrite: true });

        res.status(200).send();
      } else {
        res.send("This organization has already been bumped in the last hour.");
      }
    } else {
      res.send("You don't have permission to bump this organization.");
    }
  });

}
