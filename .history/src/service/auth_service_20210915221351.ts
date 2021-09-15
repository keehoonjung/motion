import { firebase } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

export class AuthService {
  firebaseAuth: firebase.auth.getAuth;
  googleProvider: firebase.auth.GoogleAuthProvider;
  githubProvider: firebase.auth.GithubAuthProvider;

  constructor(firebaseApp: firebase.app.App) {
    this.firebaseAuth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName: string) {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firabsAuth.signOut();
  }

  onAuthChange(onUserChanged) {
    this.firebasAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return this.googleProvider;
      case "Github":
        return this.googleProvider;
      default:
        throw new Error(`not supporte provider: ${providerName} `);
    }
  }
}
