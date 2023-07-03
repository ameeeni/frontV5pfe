import { Component, OnInit } from '@angular/core';
import {Compte} from "../choisir-votre-compte/Compte";
import {TypeCompteService} from "./type-compte.service";
import {CompteProfessionnel} from "./CompteProfessionnel";
import {CompteEpargne} from "./CompteEpargne";
import {CompteCourrant} from "./CompteCourrant";

@Component({
  selector: 'app-nouveau-compte',
  templateUrl: './nouveau-compte.page.html',
  styleUrls: ['./nouveau-compte.page.scss'],
})
export class NouveauComptePage implements OnInit {
  cptDemande = new Compte();
  cptPro = new CompteProfessionnel();
  cptEpa = new CompteEpargne();
  cptCour = new CompteCourrant();
  constructor( private typeCptSer : TypeCompteService) { }

  ngOnInit() {
this.CreateAccountSelonType();
  }
  getTypedeCompte(){
    return this.cptDemande.type_de_compte;
  }

  type_account = this.getTypedeCompte();

CreateAccountSelonType() {
  if(this.type_account =='ComptePro') {
    this.typeCptSer.SaveCompteProfssionnel(this.cptPro);
  }
  else
    if(this.type_account=='CompteCour'){
    this.typeCptSer.SaveCompteCourant(this.cptCour);
  }else if (this.type_account =="CompteEpar"){
      this.typeCptSer.SaveCompteEpagrne(this.cptEpa);
    }
}


}
