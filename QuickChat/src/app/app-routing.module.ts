import { SigninComponent } from './+signin/signin.component';
import { MypostsComponent } from './+myposts/myposts.component';
import { MainComponent } from './+main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full'},
  { path: 'signin', component: SigninComponent},
  { path: 'myposts', component: MypostsComponent},    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
