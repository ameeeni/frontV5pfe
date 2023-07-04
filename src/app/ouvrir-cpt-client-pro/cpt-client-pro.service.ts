import { Injectable } from '@angular/core';
import {ClientPro} from "../client-professionnel/client-pro";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CptClientProService {

  constructor(private _http: HttpClient) {
  }

  SaveDemandeClientPro(clientPro: ClientPro): Observable<any> {
    console.log(clientPro) ;
    return this._http.post("http://vps95761.serveur-vps.net:8080/Clients", clientPro);
  }
}
