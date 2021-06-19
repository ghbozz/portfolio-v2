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
  res.send("hello world");
});

app.post("/contact", async (req, res) => {
  console.log('api/contact')
  console.log(process.env.EMAIL_USERNAME)

  let transporter = nodemailer.createTransport({
    host: "mail.gandi.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME, // generated ethereal user
      pass: process.env.EMAIL_PASSWORD // generated ethereal password
    }
  });

  let data = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "romain.sanson@hey.com", // list of receivers
    subject: "new contact from romainsanson.dev", // Subject line
    text: req.body.message // plain text body
  });

  console.log(data)
  const status = data.response.split(":")[0] === "250 2.0.0 Ok" ? 'success' : 'failure';
  res.send({ status: status });
});

module.exports = {
  path: "/api",
  handler: app
};
