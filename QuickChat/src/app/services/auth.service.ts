import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState, AuthProviders, AuthMethods } from "angularfire2";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  //private _isSignedIn = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.subscribe((authState: FirebaseAuthState) => {
      if (authState) {
        console.log("You are signed in. All is good.");
        //this._isSignedIn = true;
      } else {
        console.log("Not signed in.");
        //this._isSignedIn = false;
      }
    });
  }

  get isSignedInStream(): Observable<boolean> {
    return this.afAuth.map<FirebaseAuthState, boolean>((authState: FirebaseAuthState) => {
      return authState != null;
    });
    //return this._isSignedIn;
  }

  signInWithGoogle(): void {
    this.afAuth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((authState: FirebaseAuthState) => {
      this.router.navigate(['/']);
    });
  }

  signOut(): void {
    this.afAuth.logout();
    this.router.navigate(['/signin']);
  }

}
