export const config = {
  logoCount: 5,
  firebaseConfig: {
    apiKey: "AIzaSyCt3COKYlSCjuDoUMet0CoXAuur9wWIhXA",
    authDomain: "video-app-f2dbb.firebaseapp.com",
    projectId: "video-app-f2dbb",
    storageBucket: "video-app-f2dbb.appspot.com",
    messagingSenderId: "686185864714",
    appId: "1:686185864714:web:104ab062d897664f6cc9f3",
    measurementId: "G-GY1SXD5636"
  },
  servers: {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  },
  DEV: "development" === "development",
};
