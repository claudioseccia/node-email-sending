const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  // res.send('send email func');
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
module.exports = sendEmail;
