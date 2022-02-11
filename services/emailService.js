const transporter = require('../config/senderEmailConfig');

const senderWelcomeEmail = async (data) => {
  await transporter.sendMail({
    from: '"DevJobs.com", <devjobs@gmail.com>',
    to: data.newUserEmail,
    subject: 'Hello! ✔',
    html: '<h1>USING NODEMAILER</h1>',
  });
};

module.exports = senderWelcomeEmail;
