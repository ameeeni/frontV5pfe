import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ConsulterMesComptesService {

  constructor(private _http : HttpClient) { }
  // getAccountByIBAN():Observable<any>{
  //
  //   return this._http.get("http://vps95761.serveur-vps.net:8080/Compte/iban/" ,{iban} );
  //
  // }
}
