import { Component, OnInit } from '@angular/core';
import {ConsulterMesComptesService} from "./consulter-mes-comptes.service";
import {AccountClass} from "./account-class.model";
import {ClientProService} from "../client-professionnel/client-pro.service";
import {ClientPro} from "../client-professionnel/client-pro";
import {Compte} from "../choisir-votre-compte/Compte";

@Component({
  selector: 'app-consulter-mes-comptes',
  templateUrl: './consulter-mes-comptes.page.html',
  styleUrls: ['./consulter-mes-comptes.page.scss'],
})
export class ConsulterMesComptesPage implements OnInit {




  solde! : bigint;
  constructor(private clientProService: ClientProService) { }
 client = new ClientPro();
  client1 : any;
  email :any   ;
listeDesComptes !:Compte ;
compte !:Compte ;
isActive!:boolean ;
hasAccount!:boolean;
  ngOnInit() {
    this.email =window.localStorage.getItem("email");
    console.log(this.email) ;
this.getClient();
console.log(this.listeDesComptes)
    this.ExistingAccount();
  }

  getClient () {

    this.clientProService.getClientByEmail(this.email).subscribe(
      (client : ClientPro)=>{
        this.client=client;
        this.listeDesComptes = client.listeDesComptes[0] || Compte;

        console.log("***********" +this.compte);
        console.log('Data:', client);
        console.log('listeDesComptes:', this.listeDesComptes);
        console.log(this.listeDesComptes) ;
    } ,(error) => {
      console.error('Error:', error);
    }
    )
  }

  ExistingAccount() {

    if(this.listeDesComptes==null){
      this.hasAccount=false;

    }else{
      this.hasAccount=true;
    }
  }

}
