import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

class AuthService {
  login(provider) {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      const user = result.user;
    });
  }
}

const auth = getAuth();
signInWithPopup(auth, provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential!.accessToken;
  const user = result.user;
});
