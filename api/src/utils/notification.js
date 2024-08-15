import admin from "../configs/firebase.js";

export default async (token, notification) => {
  try {
    await admin.messaging().send({ token, notification });
    console.log("succesfully sent!");
  } catch (e) {
    console.log(e);
  }
};