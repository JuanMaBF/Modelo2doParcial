import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Zapato } from "../model/zapato";

@Injectable()
export class ZapatoService {

    constructor(private httpService: HttpService) {
    }

    public traerTodos(): Promise<any> {
        return this.httpService.get('traerTodos');
    }

    public alta(token: string, zapato: Zapato): Promise<any> {
        let data = {
            token: token,
            zapatos: [zapato]
        }
        return this.httpService
            .post('alta', data)
            .then(rta => rta.text());
    }

}