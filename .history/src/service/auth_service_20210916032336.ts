import { FirebaseApp } from "firebase/app";

import {
  Auth,
  User,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  UserCredential,
  NextOrObserver,
} from "firebase/auth";

type Provdier = GoogleAuthProvider | GithubAuthProvider;

export interface AuthInterface {
  login(providerName: string): Promise<UserCredential>;
  onAuthChange(onUserChanged: () => void): void;
}

export class AuthService implements AuthInterface {
  firebaseAuth: Auth;
  googleProvider: GoogleAuthProvider;
  githubProvider: GithubAuthProvider;

  constructor(firebaseApp: FirebaseApp) {
    this.firebaseAuth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName: string): Promise<UserCredential> {
    const authProvider = this.getProvider(providerName);
    return signInWithPopup(this.firebaseAuth, authProvider);
  }

  logout() {
    this.firebaseAuth.signOut();
  }

  onAuthChange(onUserChanged: (user: User | null) => void) {
    this.firebaseAuth.onAuthStateChanged((user: User | null) => {
      onUserChanged(user);
    });
  }

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
