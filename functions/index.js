/* eslint-disable arrow-parens */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const config = functions.config();
// eslint-disable-next-line object-curly-spacing
const cors = require("cors")({ origin: true });
admin.initializeApp();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: config.user.email,
    pass: config.user.password,
  },
});

// eslint-disable-next-line prefer-const
let mailOptions = {
  from: "Arc Developemnt",
  to: "arunsinghsnd28@com",
  subject: "Testing nodemailer",
  text: "Test Successful",
};

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.sendMail = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    transporter.sendMail(mailOptions, error => {
      if (error) {
        response.send(error);
      } else {
        response.send("Message sent Successfully");
      }
    });
  });
});
