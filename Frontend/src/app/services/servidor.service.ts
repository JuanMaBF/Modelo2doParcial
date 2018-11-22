import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { Servidor } from "../model/servidor";

@Injectable()
export class ServidorService {

    constructor(private httpService: HttpService) {
    }

    public alta(token: string, servidor: Servidor): Promise<any> {
        let data = {
            token: token,
            servidores: [servidor]
        }
        return this.httpService
            .post('altaWS', data)
            .then(rta => console.log(rta));
    }

}