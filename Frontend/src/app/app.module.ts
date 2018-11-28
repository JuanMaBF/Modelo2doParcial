import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AltaComponent } from './pages/alta/alta.component';
import { ZapatoService } from './services/zapato.service';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { EstadisticasComponent } from './pages/estadisticas/estadisticas.component';
import { AumentoPipe } from './pipes/mayuscula.pipe';
import { GenderDirective } from './directives/gender.directive';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from '@angular/fire';
import { ImagenComponent } from './pages/imgaen/imagen.component';
import { MostrarCompComponent } from './pages/mostrarComp/mostrarComp.component';

let router: Routes = [
  { path:'', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'alta', component: AltaComponent },
  { path: 'estadisticas', component: EstadisticasComponent },
  { path: 'imagen', component: ImagenComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    AltaComponent,
    MostrarComponent,
    EstadisticasComponent,
    AumentoPipe,
    GenderDirective,
    ImagenComponent,
    MostrarCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDYUcDad9Eb6oqRo9svKEtvyRTWcxHzXZM",
      authDomain: "tplab4-3498e.firebaseapp.com",
      databaseURL: "https://tplab4-3498e.firebaseio.com",
      projectId: "tplab4-3498e",
      storageBucket: "tplab4-3498e.appspot.com",
      messagingSenderId: "447742251777"
    }),
    AngularFireStorageModule
  ],
  exports: [MostrarComponent],
  providers: [
    HttpService,
    AuthService,
    ZapatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
