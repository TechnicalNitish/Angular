import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { DialogueBoxComponent } from './dialogue-box/dialogue-box.component';
import { GetNoteComponent } from './components/get-note/get-note.component';

const routes: Routes = [
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"forget",
    component:ForgetComponent
  },
  {
    path:"reset/:data",
    component:ResetPasswordComponent
  },
  {
    path:"home",
    component:DashboardComponent
  },
  // {
  //   path:"note",
  //   component:NoteComponent
  // }
  // {
  //   path:"loginpractice",
  //   component:LoginpracticeComponent
  // }

  {
  path:"dialogueBox",
  component:DialogueBoxComponent
  },
  {path:'noteGet',component:GetNoteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
