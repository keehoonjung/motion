import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

class AuthService {
  login() {
    const auth = getAuth();
    signInWithPopup(auth, googleProvider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      const user = result.user;
    });
  }
}
