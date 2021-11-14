import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyAv7h9kJGhUV1w3WB07c_AXODX1Wyijl2M",
  authDomain: "net-work-3d9f2.firebaseapp.com",
  projectId: "net-work-3d9f2",
  storageBucket: "net-work-3d9f2.appspot.com",
  messagingSenderId: "868649766298",
  appId: "1:868649766298:web:9dd02603c071da53febe23"
};

export const FIREBASE_DATA = 'https://net-work-3d9f2-default-rtdb.firebaseio.com';
export const authURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;

const app = initializeApp(firebaseConfig);

