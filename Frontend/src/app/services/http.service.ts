import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class HttpService {
    
    private baseUrl = 'http://lvh.me/Modelo2doParcial/Backend/index.php/';

    constructor(private http: Http) {
    }

    public get(url: string): Promise<any> {
        return this.http
            .get(this.baseUrl + url)
            .toPromise()
            .then(resp => resp.json())
            .catch(err => err);
    }

    public post(url: string, data: any): Promise<any> {
        return this.http
            .post(this.baseUrl + url, JSON.stringify(data))
            .toPromise()
            .then(resp => {
                console.log(resp);
                return resp;
            })
            .catch(err => err);
    }

}