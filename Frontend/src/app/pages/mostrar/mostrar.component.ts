import { Component, Input } from '@angular/core';

@Component({
    selector: 'mostrar',
    template: `
        <div *ngFor="let zap of zapatos" class="card"> 
            Modelo: {{zap.codModelo}} <br/>
            Nombre: {{zap.nombre}} <br/>
            Fecha de ingreso: {{zap.fechaIngreso}} <br/>
            Local: {{zap.localVenta}} <br/>
            Precio: {{zap.precioCosto}} <br/>
            Genero: {{zap.genero}} <br/>
        </div>
        <br/>
        <br/>
    `
}) export class MostrarComponent {

    @Input() zapatos: any[];

    constructor() {
    }

}