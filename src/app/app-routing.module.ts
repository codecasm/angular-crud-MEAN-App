import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  
  { path : 'home', component : HomeComponent },
  { path : 'registration', component : RegistrationComponent },
  { path : 'edit/:id', component : EditComponent },
  { path : 'student-list', component : StudentListComponent },
  { path :'', redirectTo : '/home', pathMatch : 'prefix' },
  { path : '**', component : PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

