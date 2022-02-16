require('dotenv').config();
const nodemailer = require('nodemailer');
const messages = require('../constants/messages');
const statusCodes = require('../constants/statusCodes');

const configEmail = async () => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const verify = await transporter.verify();

  if (verify === false) {
    const error = new Error(messages.FORBIDDEN);
    error.status = statusCodes.FORBIDDEN;
    throw error;
  }

  console.log('ready for send emails');
};

module.exports = { configEmail };
