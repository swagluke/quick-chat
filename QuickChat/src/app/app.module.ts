import { PostService } from './services/post.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { MainComponent } from './+main/main.component';
import { MypostsComponent } from './+myposts/myposts.component';
import { SigninComponent } from './+signin/signin.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MypostsComponent,
    SigninComponent,
    CreatePostComponent,
    PostListComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    AuthService, 
    AuthGuardService, 
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
