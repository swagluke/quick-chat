import { AuthorService } from './author.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState, AuthProviders, AuthMethods } from "angularfire2";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {
  //private _isSignedIn = false;
  private _currentUserUid: string;
  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private authorService: AuthorService) {
    this.afAuth.subscribe((authState: FirebaseAuthState) => {
      if (authState) {
        console.log("You are signed in. All is good.");
        this._currentUserUid = authState.uid;
        //this._isSignedIn = true;

        console.log("Log in. authState:", authState);
        this.authorService.updateAuthor(authState.uid, authState.google.displayName,
          authState.google.photoURL);

      } else {
        console.log("Not signed in.");
        this._currentUserUid = "";
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

  get displayNameStream(): Observable<string> {
    return this.afAuth.map<FirebaseAuthState, string>((authState: FirebaseAuthState) => {
      if (authState && authState.google) {
        return authState.google.displayName;
      }
      return null;
    });
  }

  get photoUrlStream(): Observable<string> {
    return this.afAuth.map<FirebaseAuthState, string>((authState: FirebaseAuthState) => {
      if (authState && authState.google) {
        return authState.google.photoURL;
      }
      return null;
    });
  }

  get currentUserUid(): string {
    return this._currentUserUid;
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
