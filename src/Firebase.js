import firebase from "firebase";
const firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyBML2VzH_l5QSdxvqs8k3a2YWJ718MBvng",
        authDomain: "ecommercereact-f4a24.firebaseapp.com",
        databaseURL: "https://ecommercereact-f4a24.firebaseio.com",
        projectId: "ecommercereact-f4a24",
        storageBucket: "ecommercereact-f4a24.appspot.com",
        messagingSenderId: "891668728396",
        appId: "1:891668728396:web:6e823feeb936a1584f02e9"
      }
);
//const dB=firebaseApp.firestore();
const auth=firebase.auth();
export { auth};