import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  {path: "",redirectTo: "login",pathMatch: "full"},
  {path: "admin",component: AdminComponent},
  {path: "register",component: RegisterComponent},
  {path: "login",component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
