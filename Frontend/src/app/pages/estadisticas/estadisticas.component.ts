import { Component } from '@angular/core';
import { Zapato } from 'src/app/model/zapato';
import { ZapatoService } from 'src/app/services/zapato.service';

@Component({
    selector: 'estadisticas',
    templateUrl: './estadisticas.component.html'
}) export class EstadisticasComponent {

    public todos: Array<Zapato>;
    public currentLocal: string = 'local-1';
    public porLocal: Array<Zapato>;
    public repetidos: Array<Zapato>;
    public noRepetidos: Array<Zapato>;

    constructor(private zapatoService: ZapatoService) {
        this.zapatoService
            .traerTodos()
            .then(rta => {
                this.todos = rta as Array<Zapato>;
                this.filtrarPorLocal(this.currentLocal);
                this.filtrarRepetidos();
            });

    }

    public filtrarPorLocal(local: string): Array<Zapato> {
        this.porLocal = this.todos
            .filter(z => z.localVenta == local);
        return this.porLocal;
    }

    public filtrarRepetidos() {
        let local2: Array<Zapato> = this.filtrarPorLocal('local-2');
        let local1: Array<Zapato> = this.filtrarPorLocal('local-1');

        this.repetidos = local1.filter(z => local2.find(z2 => z2.codModelo == z.codModelo));
        this.noRepetidos = this.todos.filter(z => !this.repetidos.find(z2 => z2.codModelo == z.codModelo));
    }

}
