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

  private readonly apiUrl = 'http://vps95761.serveur-vps.net:8080/Clients/email/hamza_bramli123@outlook.fr';
  getClientByEmail(){
    // const url = `${this.apiUrl}?email=${email}`
    return this._http.get<any>(this.apiUrl);

  }

}
