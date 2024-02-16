import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewFoodFormComponent } from './new-food-form/new-food-form.component';
import { AuthGuard } from './_guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'newFood', component: NewFoodFormComponent, canActivate:[AuthGuard]},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
