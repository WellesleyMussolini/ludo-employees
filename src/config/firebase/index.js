import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3NWOgEIUnv-2w1AXk3vDbWA66weSavjQ",
  authDomain: "ludo-cafe-1ceee.firebaseapp.com",
  projectId: "ludo-cafe-1ceee",
  storageBucket: "ludo-cafe-1ceee.appspot.com",
  messagingSenderId: "350055631069",
  appId: "1:350055631069:web:cab5a3e3327ed140c37334"
};

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);












// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const apiKey = process.env.REACT_APP_API_KEY;
// const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
// const projectId = process.env.REACT_APP_PROJECT_ID;
// const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
// const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
// const appId = process.env.REACT_APP_APP_ID;

// const firebaseConfig = {
//   apiKey: apiKey,
//   authDomain: authDomain,
//   projectId: projectId,
//   storageBucket: storageBucket,
//   messagingSenderId: messagingSenderId,
//   appId: appId
// };

// const app = initializeApp(firebaseConfig);

// export const database = getFirestore(app);