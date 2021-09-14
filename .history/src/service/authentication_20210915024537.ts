import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

class AuthService {
  login() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential!.accessToken;
      const user = result.user;
    });
  }
}
