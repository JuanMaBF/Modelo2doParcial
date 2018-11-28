import { Component, Input } from '@angular/core';
import { Zapato } from 'src/app/model/zapato';

@Component({
    selector: 'mostrarComp',
    template: `
        
            Modelo: {{zap.codModelo}} <br/>
            Nombre: {{zap.nombre}} <br/>
            Fecha de ingreso: {{zap.fechaIngreso}} <br/>
            Local: {{zap.localVenta}} <br/>
            Precio: {{zap.precioCosto | aumentoPipe}} <br/>
            Genero: <span GenderDirective [gender]="zap.genero">{{zap.genero}}</span> <br/>
            <img width="100%" src="https://firebasestorage.googleapis.com/v0/b/tplab4-3498e.appspot.com/o/{{zap.codModelo}}?alt=media&token=8d6b919e-63c6-4998-ad7b-f041dd13ace7"/>
    `
}) export class MostrarCompComponent {

    @Input() zap: Zapato;

    constructor() {

    }

}