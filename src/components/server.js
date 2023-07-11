const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/send-email", (req, res) => {
  const { name, email, reason, phone, message } = req.body;

  // Замените 'YOUR_DOMAIN', 'YOUR_API_KEY' и 'YOUR_EMAIL_ADDRESS' на ваши реальные данные Mailgun
  const DOMAIN = "sandbox8d65c434206a45a285d6fb32391b21fc.mailgun.org";
  const API_KEY = "pubkey-bcd8eaeab2eca8d0cf204580546472f3";
  const FROM_EMAIL = "timur.yeskov@gmail.com";

  const data = {
    from: `Your Name <${FROM_EMAIL}>`,
    to: email,
    subject: "Subject of the Email",
    text: `
      Name: ${name}
      Email: ${email}
      Reason: ${reason}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  axios
    .post(`https://api.mailgun.net/v3/${DOMAIN}/messages`, data, {
      auth: {
        username: "api",
        password: API_KEY,
      },
    })
    .then(() => {
      res.status(200).json({ message: "Email sent successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Failed to send email" });
    });
});

const port = 3001; // Порт, на котором будет работать сервер
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
