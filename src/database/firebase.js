import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAI6cjgkLRf1JoqwGMKuja2HajOs_gW8ks",
    authDomain: "ex-firebase-f436e.firebaseapp.com",
    projectId: "ex-firebase-f436e",
    storageBucket: "ex-firebase-f436e.appspot.com",
    messagingSenderId: "121242899919",
    appId: "1:121242899919:web:bd4a01a52e1152d148eeba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
