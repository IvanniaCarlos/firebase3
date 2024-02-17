// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js"
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4dx8OCQOiorB8KVa-SMuzyxkaLeKCbrU",
  authDomain: "prueba-firebase-cdd4b.firebaseapp.com",
  projectId: "prueba-firebase-cdd4b",
  storageBucket: "prueba-firebase-cdd4b.appspot.com",
  messagingSenderId: "851471510375",
  appId: "1:851471510375:web:3eb2bb167556edd5341dc2",
  measurementId: "G-BBQSMPRRJS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();

// Funciones del CRUD
export const createTask = (title, description,userName) => addDoc(collection(db, "tasks"), {title, description,userName});

export const getTask = id => getDoc(doc(db, "tasks", id));

export const onGetTask = (callback) => onSnapshot(collection(db, "tasks"), callback);

export const updateTask = (id, newFields) => updateDoc(doc(db, "tasks", id), newFields);

export const deleteTask = id => deleteDoc(doc(db, "tasks", id));
