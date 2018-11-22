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

let router: Routes = [
  { path:'', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'alta', component: AltaComponent},
  { path: 'estadisticas', component: EstadisticasComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    AltaComponent,
    MostrarComponent,
    EstadisticasComponent,
    AumentoPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
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
