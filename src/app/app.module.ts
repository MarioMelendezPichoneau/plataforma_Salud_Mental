import { NgModule } from '@angular/core';
// import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule}from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from './components/carousel/carousel.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroComponent } from './components/user/registro/registro.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeInsideComponent } from './components/home-inside/home-inside.component';
import { ChatComponent } from './components/chat/chat.component';
import { InicioInsideComponent } from './components/inicio-inside/inicio-inside.component';
import { ProfAreaComponent } from './components/prof-area/prof-area.component';
import { ConsultasComponent } from './components/consultas/consultas.component';
import { ComunidadComponent } from './components/comunidad/comunidad.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { AjustesComponent } from './components/ajustes/ajustes.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { BodyComponent } from './components/body/body.component';
import { OpcionRolComponent } from './components/opcion-rol/opcion-rol.component';
import { RegistroProfComponent } from './components/user/registro-prof/registro-prof.component';


const appRoutes: Routes=[
  {path:"",component:HomeComponent},
  {path:"Carrousel",component:CarouselComponent},
  {path:"Login",component:LoginComponent},
  {path:"Registro",component:RegistroComponent},
  {path: "chat", component: ChatComponent },
  {path:"HomeInside",component:HomeInsideComponent},
  {path:"Inicio_Inside", component:InicioInsideComponent},
  {path:"Prof_area", component:ProfAreaComponent},
  {path:"Consultas", component:ConsultasComponent},
  {path:"Perfil", component:PerfilComponent},
  {path:"Ajustes", component:AjustesComponent},
  {path:"Notificaciones", component:NotificacionesComponent},
  {path:"Comunidad", component:ComunidadComponent}


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
    InicioInsideComponent,
    ProfAreaComponent,
    ConsultasComponent,
    ComunidadComponent,
    PerfilComponent,
    AjustesComponent,
    NotificacionesComponent,
    BodyComponent,
    OpcionRolComponent,
    RegistroProfComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule//,
  //  MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
