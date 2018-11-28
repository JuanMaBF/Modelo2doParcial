import { Component, Input } from '@angular/core';

@Component({
    selector: 'mostrar',
    template: `
        <div *ngFor="let zap of zapatos" class="card"> 
            <mostrarComp [zap]="zap"></mostrarComp>
        </div>
        <br/>
        <br/>
    `
}) export class MostrarComponent {

    @Input() zapatos: any[];

    constructor() {
    }

}