import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default class AuthService {
  login() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  }

  logout() {
    const auth = getAuth();
    signOut(auth);
  }
}
