import { firebase } from 'firebase/app';
import { firebase } from 'firebase/app';
import { firebase } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

interface Auth {
  login:
}

class AuthServices {
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

  onAuthChange(onUserChanged){
    this.firebasAuth.
  }
}

export AuthService