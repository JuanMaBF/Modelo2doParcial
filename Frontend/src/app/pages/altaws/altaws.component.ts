import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ServidorService } from 'src/app/services/servidor.service';
import { Servidor } from 'src/app/model/servidor';

@Component({
    selector: 'altaws',
    templateUrl: './altaws.component.html'
}) export class AltaWsComponent {

    public nombre: string;
    public espacio: string;
    public precio: string;

    constructor(private authService: AuthService, 
        private servidorService: ServidorService) {
            
    }

    public load() {
        if(this.nombre && this.espacio) {
            let currentUser = this.authService.getCurrentUser();
            let servidor = new Servidor(this.nombre, this.espacio, this.precio, currentUser.nombre);
            this.servidorService
                .alta(currentUser.token, servidor)
                .then(rta => {
                    console.log(rta);
                });
        } else {    
            alert('complete todos los campos');
        }
    }

}