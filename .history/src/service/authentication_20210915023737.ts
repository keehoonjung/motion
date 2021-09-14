import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
signInWithPopup(auth, provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
});
