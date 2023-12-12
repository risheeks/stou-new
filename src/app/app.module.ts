import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedCooksComponent } from './featured-cooks/featured-cooks.component';
import { CookSquareComponent } from './cook-square/cook-square.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { CookService } from './service/cook.service';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NewFoodFormComponent } from './new-food-form/new-food-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FoodService } from './service/food.service';
import { CookFoodComponent } from './cook-food/cook-food.component';
import { CookFoodListComponent } from './cook-food-list/cook-food-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    FeaturedCooksComponent,
    CookSquareComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ErrorComponent,
    DashboardComponent,
    NewFoodFormComponent,
    CookFoodComponent,
    CookFoodListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    CookService,
    FoodService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }