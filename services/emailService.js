const transporter = require('../config/senderEmailConfig');

const senderWelcomeEmail = async () => {
  await transporter.sendMail({
    from: '"DevJobs.com", <devjobs@gmail.com>',
    to: 'alexis10893123@hotmail.com',
    subject: 'Hello! ✔',
    html: '<h1>USING NODEMAILER</h1>',
  });
};

module.exports = senderWelcomeEmail;
