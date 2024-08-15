import express from "express";
import cors from "cors";
import sendNotification from "./utils/notification.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/send-notification", async (req, res) => {
  const { token } = req.body;

  const notification = {
    title: "Test Notification",
    body: "This is a test notification",
  };

  await sendNotification(token, notification);

  return res.status(200).json({
    success: true,
    message: "Yay! notification sent!",
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
