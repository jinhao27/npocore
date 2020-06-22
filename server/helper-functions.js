const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

// Setting color tags for post types
const postTypes = {
  announcement: {
    name: "Announcement",
    color: "#F2542D"
  },
  opportunity: {
    name: "Opportunity",
    color: "#00798C"
  },
  event: {
    name: "Event",
    color: "#1D263B"
  },
  jobOpening: {
    name: "Job Opening",
    color: "#00B0F9"
  }
}

const sendEmail = (subject, destination, message) => {
  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS
    }
  }));

  const mailOptions = {
    from: 'npocoreinfo@gmail.com',
    to: destination,
    subject: subject,
    text: message
  };

  transporter.sendMail(mailOptions, function(err, info){
    if (err) throw err;
  });
}

const getPostTypeObject = (postType) => {
  switch (postType) {
    case "Announcement":
      return postTypes.announcement;
      break;

    case "Opportunity":
      return postTypes.opportunity;
      break;

    case "Event":
      return postTypes.event;
      break;

    case "Job Opening":
      return postTypes.jobOpening;
      break;

    default:
      return postTypes.announcement;
      break;
  }
}

module.exports = { sendEmail, getPostTypeObject };
