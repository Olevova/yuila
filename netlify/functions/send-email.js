const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);
  const { name, email, phone, message } = data;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO, 
    subject: 'Нове повідомлення з сайту',
    // text: `Ім'я: ${name}\nEmail: ${email}\nТелефон: ${phone}\nПовідомлення:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.5;">
        <h2 style="color: #2c3e50;">Нове повідомлення з сайту</h2>
        <p><strong>Ім'я:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Повідомлення:</strong></p>
        <div style="background-color: #f4f4f4; padding: 10px; border-radius: 4px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
      </div>
    `,
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