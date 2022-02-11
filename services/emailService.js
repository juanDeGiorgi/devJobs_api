const transporter = require('../config/senderEmailConfig');

const senderWelcomeEmail = async (email) => {
  await transporter.sendMail({
    from: '"DevJobs.com", <devjobs@gmail.com>',
    to: email,
    subject: 'Hello! ✔',
    html: '<h1>USING NODEMAILER</h1>',
  });
};

module.exports = { senderWelcomeEmail };
