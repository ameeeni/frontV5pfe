import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClientPar} from "../client-particulier/client-par";
import {map, Observable} from "rxjs";
import {ClientPro} from "./client-pro";

@Injectable({
  providedIn: 'root'
})
export class ClientProService {
  constructor(private _http : HttpClient) { }
  RegisterFromClientPro(userPro: ClientPro) :Observable<any>{
    return this._http.post("http://localhost:8081/ClientProfessionnel" , userPro);

  }
   client !:ClientPro;
  data: any[] = [];

  private readonly apiUrl = 'http://vps95761.serveur-vps.net:8080/Clients/email';
  getClientByEmail(email : string ){
     const url = `${this.apiUrl}/${email}` ;
    console.log(email) ;
    return this._http.get<any>(url);

  }

   getAccountByIBAN(iban: any):Observable<any>{

     return this._http.get("http://vps95761.serveur-vps.net:8080/Compte/iban/" ,iban );

   }

}
