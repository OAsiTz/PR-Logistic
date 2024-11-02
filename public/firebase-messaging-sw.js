// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBqsqOEW_FbRAwkDvLgjUrTlKazuvUVaRM",
    authDomain: "angular-pwa-768d5.firebaseapp.com",
    projectId: "angular-pwa-768d5",
    storageBucket: "angular-pwa-768d5.appspot.com",
    messagingSenderId: "536528641606",
    appId: "1:536528641606:web:83742e09a017820bf7f447",
    measurementId: "G-ZRH1XQ3N78"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Received background message: ', payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: '/firebase-logo.png' // Change to your icon
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
