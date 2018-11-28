import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ZapatoService } from 'src/app/services/zapato.service';
import { Zapato } from 'src/app/model/zapato';

@Component({
    selector: 'alta',
    templateUrl: './alta.component.html'
}) export class AltaComponent {

    public currentUser: any;

    public codModelo: string;
    public nombre: string;
    public fechaIngreso: string;
    public localVenta: string;
    public precioCosto: string;
    public genero: string

    public zapatos: Array<Zapato>;

    constructor(private authService: AuthService,
        private zapatoService: ZapatoService) {
        this.currentUser = this.authService.getCurrentUser();
        this.traerZapatos();
    }

    public traerZapatos() {
        this.zapatoService
            .traerTodos()
            .then(rta => {
                this.zapatos = rta as Array<Zapato>;
            });
    }

    public load() {
        if(this.codModelo && this.nombre  && this.fechaIngreso  
            && this.localVenta  && this.precioCosto  && this.genero) {
            let zapato = new Zapato(this.codModelo, this.nombre, this.fechaIngreso, this.localVenta, this.precioCosto, this.genero);
                console.log(zapato);
            this.zapatoService
                .alta(this.currentUser.token, zapato)
                .then(rta => {
                    if(rta == 'ok') {
                        this.traerZapatos();
                        this.codModelo = undefined; 
                        this.nombre = undefined; 
                        this.fechaIngreso = undefined; 
                        this.localVenta = 'local-1'; 
                        this.precioCosto = undefined; 
                        this.genero = undefined; 
                    }
                });
        } else {    
            alert('complete todos los campos');
        }
    }

}