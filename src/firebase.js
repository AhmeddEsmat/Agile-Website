import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
    apiKey: "AIzaSyCnQYaq81iR_g3wFte9PVMS9_E_pEzcD6g",
    authDomain: "agile-project-99fee.firebaseapp.com",
    projectId: "agile-project-99fee",
    storageBucket: "agile-project-99fee.appspot.com",
    messagingSenderId: "agile-project-99fee.appspot.com",
    appId: "1:981615123097:web:6a28162f3a8e8dffa1f608",
    measurementId: "G-FJP6R7FGCG"
});

export const auth = app.auth()
export default app