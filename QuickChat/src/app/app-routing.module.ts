import { AuthGuardService } from './services/auth-guard.service';
import { SigninComponent } from './+signin/signin.component';
import { MypostsComponent } from './+myposts/myposts.component';
import { MainComponent } from './+main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
  { path: 'signin', component: SigninComponent},
  { path: 'myposts', component: MypostsComponent, canActivate: [AuthGuardService]}, 
  { path: '**', redirectTo: ''},   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
