import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAEjRbWXYRBWpzh1YCYxEEBNvJNxDYVFXc",
  authDomain: "showcase-dashboard-4e8a5.firebaseapp.com",
  projectId: "showcase-dashboard-4e8a5",
  storageBucket: "showcase-dashboard-4e8a5.appspot.com",
  messagingSenderId: "1010380980847",
  appId: "1:1010380980847:web:c2d6f2e4c2a7d1c9f6b6c8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;
