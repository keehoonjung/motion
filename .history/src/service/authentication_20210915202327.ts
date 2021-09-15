import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

export default class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
  }
  login() {
    signInWithPopup(this.fibaseAuth, this.googleProvider);
  }

  logout() {
    this.firabsAuth.signOut();
  }
}
