import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';


export const routes: Routes = [
  {path: "",redirectTo: "login",pathMatch: "full"},
  {path: "admin",component: AdminComponent},
  {path: "login",component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
