import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState, AuthProviders, AuthMethods } from "angularfire2";

@Injectable()
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.subscribe( (authState: FirebaseAuthState) => {
      if(authState) {
        console.log("You are signed in. All is good.");
      } else{
        console.log("Not signed in.");
      }
    });
   }

   signInWithGoogle(): void {
      this.afAuth.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
      });
   }

   signOut(): void {
     this.afAuth.logout();
   }

}
