var express = require("express");
var nodemailer = require("nodemailer");
var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  console.log('/api')
});

app.post("/contact", async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "mail.gandi.net",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  try {
    let data = await transporter.sendMail({
      from: req.body.email,
      to: "romain.sanson@hey.com",
      subject: "new contact from romainsanson.dev",
      text: req.body.message
    });
    const status = data.response.split(":")[0] === "250 2.0.0 Ok" ? 'success' : 'failure';
    res.send({ status: status });
  } catch (error) {
    res.send({ status: 'failure' });
  }
});

module.exports = {
  path: "/api",
  handler: app
};
