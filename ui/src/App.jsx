import React, { useState, useEffect } from "react";
import axios from "axios";
import { getToken } from "./configs/firebase";

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    getToken()
      .then((token) => {
        console.log(79, token);
        setToken(token);
      })
      .catch((error) => console.error("Error retrieving token:", error));
  }, []);

  function requestPermission() {
    console.log("Requesting permission...");
    return Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        return true
      } else {
        return false
      }
    });
  }

  const handleSendNotification = () => {
    const sendNotification = requestPermission()
    if (sendNotification && token) {
      axios
        .post("http://localhost:3001/send-notification", { token })
        .then(() => console.log("Notification sent"))
        .catch((error) => console.error("Error sending notification:", error));
    } else {
      console.error("Token not available");
    }
  };

  return (
    <div>
      <h1>heeeree</h1>
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
}

export default App;
