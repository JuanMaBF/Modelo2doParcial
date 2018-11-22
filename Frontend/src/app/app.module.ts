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
import { AltaWsComponent } from './pages/altaws/altaws.component';
import { ServidorService } from './services/servidor.service';

let router: Routes = [
  { path:'', component: InicioComponent},
  { path: 'login', component: LoginComponent},
  { path: 'altaws', component: AltaWsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    AltaWsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpService,
    AuthService,
    ServidorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
