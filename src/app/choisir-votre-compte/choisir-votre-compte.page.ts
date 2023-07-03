import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ChoisirCompteService} from "./choisir-compte.service";
import {CompteProfessionnel} from "../nouveau-compte/CompteProfessionnel";
import {CompteEpargne} from "../nouveau-compte/CompteEpargne";
import {CompteCourrant} from "../nouveau-compte/CompteCourrant";
import {ClientPro} from "../client-professionnel/client-pro";

import {ClientProService} from "../client-professionnel/client-pro.service";
import {Compte} from "./Compte";
import {Router} from "@angular/router";

@Component({
  selector: 'app-choisir-votre-compte',
  templateUrl: './choisir-votre-compte.page.html',
  styleUrls: ['./choisir-votre-compte.page.scss'],
})
export class ChoisirVotreComptePage implements OnInit {
  typeForm !:FormGroup;
  constructor(private fb : FormBuilder , private typeAccountServ : ChoisirCompteService , private clientProService :ClientProService,
  private router : Router) { }
   typeOfAccount !: any ;
  cptPro = new CompteProfessionnel();
  cptEpa = new CompteEpargne();
  cptCour = new CompteCourrant();
  compte = new Compte() ;
  email :any   ;
  listeDesComptes !:Compte ;
  client = new ClientPro();
  type_account!:any ;
  ngOnInit() {
    this.typeForm = this.fb.group({
      myButton: this.fb.control(''),
    })


    this.email =window.localStorage.getItem("email");
    console.log(this.email) ;
    this.getClient();
    console.log(this.listeDesComptes) ;

  }
  handleButtonClick(buttonValue: String) {
    // const buttonValue = event.target.innerText;
     console.log('Clicked Button:', buttonValue);

    this.type_account = buttonValue.toString();

  }
  $event !:any;
  value !: any;

//Houniiiiiiiiiiiiiiii Ouheeeeeeeeeeeelnaaaaaaaaaaaaaaaaaaaaaaaaaaa
  //bech najm naccedi mel client lel compte.

  getClient () {

    this.clientProService.getClientByEmail(this.email).subscribe(
      (client : ClientPro)=>{
        this.client=client;
        this.listeDesComptes = client.listeDesComptes[0] || Compte;

        console.log("***********" +this.compte);
        console.log('Data:', client);
        console.log('listeDesComptes:', this.listeDesComptes);
      } ,(error) => {
        console.error('Error:', error);
      }
    )
  }
 /* CreateAccountSelonType() {
    if(this.type_account =="PRO") {
      this.compte.typeCompte = this.type_account;
    }
    else
    if(this.type_account=="COURANT"){
      this.compte.typeCompte = this.type_account;
    }else if (this.type_account =="EPARGNE"){
      this.compte.typeCompte = this.type_account;
    }
    return this.compte.typeCompte;
  }*/
  saveCompte() {
    console.log(this.type_account + this.client.id_client)
    if(this.type_account=="PRO"){
      this.compte.typeCompte = "PRO"
      this.typeAccountServ.SaveCompteProfssionnel(this.compte, this.client.id_client).subscribe(res=>{
    console.log(res)
      })
      this.router.navigateByUrl('/documents-perso')
    }
    if(this.type_account=="COURANT") {
      this.compte.typeCompte = "COURANT"
      this.typeAccountServ.SaveCompteProfssionnel(this.compte, this.client.id_client).subscribe(res=>{

      })
      this.router.navigateByUrl('/documents-perso')
    }
    if(this.type_account=="EPARGNE") {
      this.compte.typeCompte = "EPARGNE"
      this.typeAccountServ.SaveCompteProfssionnel(this.compte, this.client.id_client).subscribe(res=>{

      })
      this.router.navigateByUrl('/documents-perso')
    }

  }

}
