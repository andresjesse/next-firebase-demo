"use client";

import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { Button, Flex, Paper, Text, Title } from "@mantine/core";

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
      <Paper shadow="md" p="xl">
        <Flex direction="column">
          <Title>App Title</Title>

          {process.env.NEXT_PUBLIC_SIGNUP_ENABLED == "true" ? (
            <Button onClick={handleCreateUser}>Create User</Button>
          ) : (
            <Text>User creation is disabled!</Text>
          )}
          <Button onClick={handleLogin}>Login</Button>
        </Flex>
      </Paper>
    </main>
  );
}
