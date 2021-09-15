import firebase from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

type Provdier =
  | firebase.auth.GoogleAuthProvider
  | firebase.auth.GithubAuthProvider
  | Error;

export interface Auth {
  login(providerName: string): Promise<firebase.auth.UserCredential>;
}

export class AuthService implements Auth {
  firebaseAuth: firebase.auth.getAuth;
  googleProvider: firebase.auth.GoogleAuthProvider;
  githubProvider: firebase.auth.GithubAuthProvider;

  constructor(firebaseApp: firebase.app.App) {
    this.firebaseAuth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName: string): Promise<firebase.auth.UserCredential> {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  // onAuthChange(onUserChanged) {
  //   this.firebaseAuth.onAuthStateChanged((user) => {
  //     onUserChanged(user);
  //   });
  // }

  getProvider(providerName: string): Provdier {
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
