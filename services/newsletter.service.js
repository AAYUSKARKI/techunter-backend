const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'shahbishwa21@gmail.com',
    pass: 'yvgn stcq deoh reko'
  }
});

module.exports = transporter;
