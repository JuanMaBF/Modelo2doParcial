import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/model/usuario';
import { Router } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
}) export class LoginComponent {

    public nombre: String;
    public mail: String;
    public clave: String;
    public perfil: String;
    public errorMessage: String;

    constructor(private authService: AuthService,
            private router: Router) {
    }

    public login(): void {
        if(this.mail && this.nombre && this.clave && this.perfil) {
            let usuario = new Usuario(this.nombre, this.mail, this.clave, this.perfil);
            this.authService
                .login(usuario) 
                .then(rta => {
                    this.handleRta(rta);
                })
        } else {
            alert('Complete todos los campos');
        }
    }

    public handleRta(rta: any) {
        let error = rta.error;
        console.log(rta);
        if(error == 'nombreError') {
            this.errorMessage = "Nombre incorrecto";
        } else if(error == 'passError') {
            this.errorMessage = "Contraseña incorrecta";
        } else if(error == 'mailError') {
            this.errorMessage = "Email incorrecto";
        } else if(error == 'perfilError') {
            this.errorMessage = "Perfil incorrecto";
        } else if(rta.result == 'ok') {
            localStorage.setItem('parcial-usr', JSON.stringify(rta));
            this.router.navigate(['']);
        }
    }

    public autocomplete(type: string) {
        if('profesional') {
            this.nombre = 'fafa';
            this.mail = 'fafa@fafa.com';
            this.clave = 'fafa';
            this.perfil = 'profesional';
        } else if('normal') {
            this.nombre = 'normal';
            this.mail = 'normal@normal.com';
            this.clave = 'normal';
            this.perfil = 'normal';
        } else if('free') {
            this.nombre = 'free';
            this.mail = 'free@free.com';
            this.clave = 'free';
            this.perfil = 'free';
        }  
    }

}