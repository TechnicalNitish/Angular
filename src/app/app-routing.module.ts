import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent} from './components/dashboard/dashboard.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { GetNoteComponent } from './components/get-note/get-note.component';
import { IconComponent } from './components/icon/icon.component';
import { NoteComponent } from './components/note/note.component';
import { DeleteAndRestoreComponent } from './components/delete-and-restore/delete-and-restore.component';
import { UpdatenotecomponentComponent } from './components/updatenotecomponent/updatenotecomponent.component';
import { EditlabelComponent } from './components/editlabel/editlabel.component';
import { GridviewComponent } from './components/gridview/gridview.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './service/auth-guard.service';

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
  { canActivate : [AuthGuard],
    path:"home",
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:NoteComponent
      },
      {
        path:'trash',
         component:TrashComponent
      },
      {
        path:"archive",
        component:ArchiveComponent
      },
      {
        path:"get-note",
        component:GetNoteComponent
      },
      {
        path:'deleteandrestore',
        component:DeleteAndRestoreComponent
      },
      {
        path:'updatenote',
        component:UpdatenotecomponentComponent
      },
      {
        path:'grid',
        component:GridviewComponent
      },
      {
        path:'search',
        component:SearchComponent
      }
     
    ]
    
    },
 {
   path:'trashIcon',
   component:IconComponent
 },
 {
  path:'editlabel',
  component:EditlabelComponent
}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
