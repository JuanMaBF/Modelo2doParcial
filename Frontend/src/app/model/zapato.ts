export class Zapato {

    public id: string;

    constructor(public codModelo: string,
        public nombre: string,
        public fechaIngreso: string,
        public localVenta: string,
        public precioCosto: string,
        public genero: string) {
        }
}