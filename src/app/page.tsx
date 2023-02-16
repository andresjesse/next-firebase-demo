"use client";

import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Home() {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const router = useRouter();

  const handleCreateUser = () => {
    createUserWithEmailAndPassword(auth, "user@email.com", "123456")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error, errorMessage);
        // ..
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, "user@email.com", "123456")
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.push("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}
