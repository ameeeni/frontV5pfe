import { Injectable } from '@angular/core';
import {ClientPro} from "../client-professionnel/client-pro";
import {Observable} from "rxjs";
import {Virement} from "./virement";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class VirementService {

  constructor(private _http: HttpClient) {
  }

  SaveVirement(virement: Virement): Observable<any> {
    console.log(virement);
    return this._http.post("http://vps95761.serveur-vps.net:8080/transactionbancaire", virement);
  }

  getAllTransaction():Observable<Virement[]>{

    return this._http.get<Virement[]>("http://vps95761.serveur-vps.net:8080/transactionbancaire");


  }
}
