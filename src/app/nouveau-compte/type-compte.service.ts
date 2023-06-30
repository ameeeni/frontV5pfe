import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CompteProfessionnel} from "./CompteProfessionnel";
import {Observable} from "rxjs";
import {CompteCourrant} from "./CompteCourrant";
import {CompteEpargne} from "./CompteEpargne";
import {Compte} from "../type-de-compte/Compte";
import {data, error} from "jquery";

@Injectable({
  providedIn: 'root'
})
export class TypeCompteService {
  cptDemande = new Compte();
  constructor(private http : HttpClient) { }

  SaveCompteProfssionnel(comptePro : CompteProfessionnel): Observable<any>{
    return this.http.post("http://vps95761.serveur-vps.net:8080/CompteProfessionnel" ,comptePro)
  }

  SaveCompteEpagrne(compteCour: CompteCourrant){
  return this.http.post("http://vps95761.serveur-vps.net:8080/CompteCourrant" , compteCour);
  }
  SaveCompteCourant(compteEpar: CompteEpargne){
    return this.http.post ("http://vps95761.serveur-vps.net:8080/CompteEpargne" , compteEpar);
  }

}
