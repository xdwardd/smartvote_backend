require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465, // or 587
//   secure: true, // true for 465, false for 587
//   auth: {
//     user: 'joshuacatapan2003@gmail.com',
//     pass: 'ihxz zgcn ktxk ykwk' // NOT your Gmail password
//   }
// });

// async function sendEmail() {
//   try {
//     const info = await transporter.sendMail({
//       from: '"Your Name" <yourgmail@gmail.com>',
//       to: 'joshuacatapan2003@gmail.com',
//       subject: 'Test Email from Gmail SMTP',
//       text: 'Hello Test ni amaw!',
//       // html: '<b>Hello from Node.js using smtp.gmail.com!</b>' // Optional HTML
//     });

//     console.log('Email sent:', info.messageId);
//   } catch (err) {
//     console.error('Error sending email:', err);
//   }
// }

// sendEmail();
