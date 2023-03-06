const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

/*
//JUST TESTING THE ROUTING
const sendEmail = () => {
  res.send('send email func');
}
//ETHEREAL
const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();
  //NOTE: in production put all the values in a .env
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'forrest94@ethereal.email',
      pass: 'stpXC83GzxcMpdWr18',
    },
  });
  let info = await transporter.sendMail({
    from: '"Claudio 👻" <foo@example.com>', // sender address
    to: 'forrest94@ethereal.email', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<h2>Sending emails with node.js</h2><b>Hello world?</b>', // html body
  });
  res.json(info);
};
*/
//SENDGRID
const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    from: 'certified_in_sendgrid@email', // change with your verified sender (create a sender identity)
    to: 'cla.seccia@gmail.com', // recipient address
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<h2>Sending emails with node.js</h2><b>Hello world?</b>', // html body
  };
  const info = await sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => console.log(error));

  res.json(info);
};
module.exports = sendEmail;
