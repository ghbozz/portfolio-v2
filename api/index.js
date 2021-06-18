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
  console.log("express api");
});

app.post("/contact", async (req, res) => {
  // let testAccount = await nodemailer.createTestAccount();

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

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: req.body.email, // sender address
    to: "romain.sanson@hey.com", // list of receivers
    subject: "new contact from romainsanson.dev", // Subject line
    text: req.body.message // plain text body
  });

  console.log(info);
});

app.listen(process.env.PORT);

module.exports = {
  path: "/api",
  handler: app
};
