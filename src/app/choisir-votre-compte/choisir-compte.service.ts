import { Injectable } from '@angular/core';
import {CompteProfessionnel} from "../nouveau-compte/CompteProfessionnel";
import {Observable} from "rxjs";
import {CompteCourrant} from "../nouveau-compte/CompteCourrant";
import {CompteEpargne} from "../nouveau-compte/CompteEpargne";
import {HttpClient} from "@angular/common/http";
import {Compte} from "../choisir-votre-compte/Compte";

@Injectable({
  providedIn: 'root'
})
export class ChoisirCompteService {

  constructor(private http : HttpClient) { }
  SaveCompteProfssionnel(comptePro : Compte , idClient :number): Observable<any>{
    return this.http.post("http://vps95761.serveur-vps.net:8080/Compte/save/"+idClient , comptePro  )
  }

  SaveCompteEpagrne(compteCour: CompteCourrant ,  idClient :number):Observable<any>{
    return this.http.post("http://vps95761.serveur-vps.net:8080/Compte/save/"+idClient , compteCour );
  }
  SaveCompteCourant(compteEpar: CompteEpargne ,idClient :number):Observable<any>{
    return this.http.post ("http://vps95761.serveur-vps.net:8080/Compte/save/"+idClient  , compteEpar );
  }
}
