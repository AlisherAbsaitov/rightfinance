import firabease from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
   apiKey: "AIzaSyAFIVH3MknplLfIqF4DWgyPR4t-f9Gy_po",
   authDomain: "crud-c7b27.firebaseapp.com",
   projectId: "crud-c7b27",
   storageBucket: "crud-c7b27.appspot.com",
   messagingSenderId: "264016711766",
   appId: "1:264016711766:web:421fe1590b51da6c40ebf7",
   measurementId: "G-23X80PTBYL"
 };

 firabease.initializeApp(firebaseConfig)
 export const db = firabease.firestore()