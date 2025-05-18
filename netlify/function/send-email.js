const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);
  const { name, email, phone } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_TO, 
    subject: 'Нове повідомлення з сайту',
    phone: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};