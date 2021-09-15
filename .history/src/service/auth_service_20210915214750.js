import { firebase } from 'firebase/app';
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";



class AuthService {
  constructor() {
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName) {
    signInWithPopup(this.fibaseAuth, providerName);
  }

  logout() {
    this.firabsAuth.signOut();
  }

  onAuthChange(onUserChanged){
    this.firebasAuth.onAuthStateChanged((user)=>{
      onUserChanged(user);
    })
  }

  getProvider(providerName){
    switch(providerName){
      case "Google":
        return this.googleProvider;
        case "Github":
          return this.googleProvider;
    }
  }
}

export AuthService