import firebase from "firebase/compat/app";
import "firebase/compat/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBgA2njtMK0Z_R0PweABztXcN7UwsLrQ_g",
  authDomain: "test-ab2a9.firebaseapp.com",
  projectId: "test-ab2a9",
  storageBucket: "test-ab2a9.appspot.com",
  messagingSenderId: "245724337802",
  appId: "1:245724337802:web:8ce4689a02aa455f9aff73",
  measurementId: "G-HL736ZZND2",
};

export default firebase.initializeApp(firebaseConfig);

export const getToken = async () => {
  const messaging = firebase.messaging();

  try {
    return await messaging.getToken({})
  } catch(error) {
    console.error("Error retrieving token:", error)
  }
}