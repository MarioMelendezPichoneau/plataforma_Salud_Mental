import { NgModule } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {HttpClientModule}from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule } from './carousel/carousel.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './user/registro/registro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeInsideComponent } from './home-inside/home-inside.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes=[
  {path:"",component:HomeComponent},
  {path:"Carrousel",component:CarouselComponent},
  {path:"Login",component:LoginComponent},
  {path:"Registro",component:RegistroComponent},
  {path: "chat", component: ChatComponent },
  {path:"HomeInside",component:HomeInsideComponent},
  {path:"sidebar",component:SidebarComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegistroComponent,
    SidebarComponent,
    HomeInsideComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
