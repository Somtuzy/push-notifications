import admin from "firebase-admin";
import serviceAccount from "./test-ab2a9-firebase-adminsdk-7mq30-f5aa23f1fe.js"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;