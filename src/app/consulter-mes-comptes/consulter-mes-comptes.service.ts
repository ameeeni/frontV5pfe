import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {VirementService} from "../ordonner-un-virement/virement.service";
import {ClientPro} from "../client-professionnel/client-pro";
import {Compte} from "../choisir-votre-compte/Compte";
import {ChoisirCompteService} from "../choisir-votre-compte/choisir-compte.service";
import {ClientProService} from "../client-professionnel/client-pro.service";
import {Virement} from "../ordonner-un-virement/virement";


@Injectable({
  providedIn: 'root'
})
export class ConsulterMesComptesService   {




  constructor(private _http : HttpClient , private virementService :VirementService,private typeAccountServ : ChoisirCompteService , private clientProService :ClientProService) { }
  // getAccountByIBAN():Observable<any>{
  //
  //   return this._http.get("http://vps95761.serveur-vps.net:8080/Compte/iban/" ,{iban} );
  //
  // }




}
