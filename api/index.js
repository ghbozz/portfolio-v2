var express = require("express");
var parser = require("body-parser");
var nodemailer = require("nodemailer");
var app = express();

app.use(parser.json());

app.post("/contact", async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.gandi.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD // generated ethereal password
    }
  });
  console.log("TRANSPORTER");
  console.log(transporter);

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "romain.sanson@hey.com", // list of receivers
    subject: "new contact from romainsanson.dev", // Subject line
    text: req.body.message // plain text body
  });
  console.log("INFO");
  console.log(info);

  res.send(info);
});

module.exports = {
  path: "/api",
  handler: app
};
