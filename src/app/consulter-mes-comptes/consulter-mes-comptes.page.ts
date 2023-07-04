import { Component, OnInit } from '@angular/core';
import {ConsulterMesComptesService} from "./consulter-mes-comptes.service";
import {AccountClass} from "./account-class.model";
import {ClientProService} from "../client-professionnel/client-pro.service";
import {ClientPro} from "../client-professionnel/client-pro";
import {Compte} from "../choisir-votre-compte/Compte";
import {Router} from "@angular/router";
import {Virement} from "../ordonner-un-virement/virement";
import {VirementService} from "../ordonner-un-virement/virement.service";
import {ChoisirCompteService} from "../choisir-votre-compte/choisir-compte.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-consulter-mes-comptes',
  templateUrl: './consulter-mes-comptes.page.html',
  styleUrls: ['./consulter-mes-comptes.page.scss'],
})
export class ConsulterMesComptesPage implements OnInit {




  solde! : bigint;
  constructor(private clientProService: ClientProService , private router : Router ,private virementService :VirementService,private typeAccountServ : ChoisirCompteService) { }
 client = new ClientPro();
  client1 : any;
  email :any   ;
listeDesComptes !:Compte ;
compte !:Compte ;
isActive:boolean =false   ;

  alltrans !:Virement[] ;
  cnctiban !: string ;
  trans !: Virement[];
  listLenth !:any ;

  attente =false ;
  eechec = true ;
  succes =false ;
  isAtive!:boolean ;
  ngOnInit() {

    this.email =window.localStorage.getItem("email");

    console.log("from localstorage" + this.email) ;

this.getClient();



    //this.ExistingAccount();
console.log(this.getAllTransaction () ) ;



  }

  getClient () {

    this.clientProService.getClientByEmail(this.email).subscribe(
      (client : ClientPro)=>{
        this.client=client;
        this.listeDesComptes = client.listeDesComptes[0] || Compte ;

        console.log("***********" +this.compte);
        console.log('Data:', client);
        console.log('listeDesComptes:', this.listeDesComptes);
        this.listLenth= client.listeDesComptes.length ;
        this.cnctiban = this.listeDesComptes.iban ;
      console.log(this.cnctiban)
        this.isActive = client.listeDesComptes[0]?.active ;
        console.log(this.isActive) ;
        this.ExistingAccount();
        this.alltrans=this.getAllTransaction() ;
    } ,(error) => {
      console.error('Error:', error);
    }
    )
  }

  ExistingAccount() {

    if( (this.isActive===false ) && (this.listLenth!==undefined) ){
      this.attente=true;

      console.log("has account"+this.attente)


   }
      // else
    //
    // if(  (this.listLenth ===undefined) || (this.cnctiban==null) && (this.listLenth===undefined )){
    //
    //   this.eechec =true;
    //
    //   console.log("echec"+ this.eechec)
    //
    // }
      else
        if (this.isActive===true) {
        this.succes=true ;
        this.eechec=false;
        console.log("succes"+this.succes)
      }
  }

  NavigateToAccount() {

   this.router.navigateByUrl("/choisir-votre-compte")
    console.log("jjjjjjj")
  }
   getAllTransaction ():Virement[] {
   let alldata :Virement[] =  []
    this.virementService.getAllTransaction().subscribe(data =>{
      console.log(data);
      /*data.map(item=>{
       alldata.push(item);
      }) */
      data.forEach( value=> {
        console.log(this.cnctiban)
        if (value.ibandebiteur === this.cnctiban ) {
          alldata.push(value) ;

        }
      })
      console.log(alldata)
    }) ;

    return alldata ;
  }

  affichetrans () {
    const iban = this.cnctiban ;
    const trans : Virement[] = [];



    return trans ;
  }
}
