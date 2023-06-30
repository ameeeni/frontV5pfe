import { Injectable } from '@angular/core';
import {ClientPro} from "../client-professionnel/client-pro";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {options} from "ionicons/icons";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  public authenticated !: boolean;
  constructor( private http:HttpClient) { }
  login(email:string, mot_de_passe:string){
    return this.http.post<any>(

      'http://vps95761.serveur-vps.net:8080/auth/authenticate',
      {email, mot_de_passe})
      .subscribe(userData =>{
        console.log("****" + email + "******" + mot_de_passe)


         let tokenStr = "Bearer " + userData.token;
         window.localStorage.setItem("email", email);
         window.localStorage.setItem("token", tokenStr);

        console.log(userData)
        return userData;
      })

  }





}
