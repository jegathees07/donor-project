import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDBNU1YelHMIhI3M6zx4iDNDUGwNfth1KM",
    authDomain: "login-form-52b7d.firebaseapp.com",
    projectId: "login-form-52b7d",
    storageBucket: "login-form-52b7d.appspot.com",
    messagingSenderId: "638320195222",
    appId: "1:638320195222:web:928c6d760b8bc9698ff4b7"
};

const app = initializeApp(firebaseConfig);

function showMessage(message, divId) {
    const messageDiv = document.getElementById(divId);
    if (messageDiv) {
        messageDiv.style.display = "block";
        messageDiv.innerText = message;
        messageDiv.style.opacity = 1;
        setTimeout(function () {
            messageDiv.style.opacity = 0
        }, 4000);
    } else {
        console.error(`Element with id ${divId} not found.`);
    }
}

const ButtonSignUp = document.getElementById("btn-signup");
ButtonSignUp.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const fullName = document.getElementById("name").value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: email,
                fullName: fullName
            };
            showMessage('Account Created Successfully', 'signUpMessage');
            const docRef = doc(db, "users", user.uid);
            setDoc(docRef, userData)
                .then(() => {
                    window.location.href = 'signup.html';
                })
                .catch((error) => {
                    console.error("Error writing document", error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/email-already-in-use') {
                showMessage('Email Address Already Exists !!!', 'signUpMessage');
            } else {
                showMessage('Unable to create user', 'signUpMessage');
            }
        });
});

const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            showMessage('Login Successfully', 'signInMessage');
            const user = userCredential.user;
            localStorage.setItem('loggedInUsrId', user.uid);
            window.location.href = 'index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/invalid-credential') {
                showMessage('Incorrect Email or Password', 'signInMessage');
            } else {
                showMessage('Account does not Exist', 'signInMessage');
            }
        });
});
