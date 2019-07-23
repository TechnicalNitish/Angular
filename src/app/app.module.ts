import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import {MatCardModule} from '@angular/material/card'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { FormsModule,ReactiveFormsModule}   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { ForgetComponent } from './components/forget/forget.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';
import { NoteComponent } from './components/note/note.component';
import { GetNoteComponent } from './components/get-note/get-note.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { IconComponent } from './components/icon/icon.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NoteComponent,
    GetNoteComponent,
    ArchiveComponent,
    TrashComponent,
    IconComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatTooltipModule,
    MatListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
