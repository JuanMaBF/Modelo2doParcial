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
    public tipo: String;
    public errorMessage: String;

    constructor(private authService: AuthService,
            private router: Router) {
    }

    public login(): void {
        if(this.mail && this.nombre && this.clave && this.tipo) {
            let usuario = new Usuario(this.nombre, this.mail, this.clave, this.tipo);
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
        if(type == 'cliente') {
            this.nombre = 'cliente';
            this.mail = 'cliente@cliente.com';
            this.clave = 'cliente';
            this.tipo = 'cliente';
        } else if(type == 'vendedor') {
            this.nombre = 'vendedor';
            this.mail = 'vendedor@vendedor.com';
            this.clave = 'vendedor';
            this.tipo = 'vendedor';
        } else if(type == 'administrador') {
            this.nombre = 'admin';
            this.mail = 'admin@admin.com';
            this.clave = 'admin';
            this.tipo = 'administrador';
        }  
    }

}