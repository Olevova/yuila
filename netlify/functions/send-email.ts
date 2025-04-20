const nodemailer = require('nodemailer');

exports.handler = async (event:any) => {
  const data = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env?.['GMAIL_USER'], // додай у Netlify в env
      pass: process.env?.['GMAIL_PASS'], // додай у Netlify в env
    },
  });

  const mailOptions = {
    from: data.email,
    to: process.env?.['RECEIVER_EMAIL'], // куди надсилати
    subject: `Нове повідомлення з сайту від ${data.name}`,
    text: `Ім'я: ${data.name}\nEmail: ${data.email}\nТелефон: ${data.phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: JSON.stringify({ message: 'Email sent' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error}) };
  }
};
