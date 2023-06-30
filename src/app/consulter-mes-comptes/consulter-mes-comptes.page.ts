import { Component, OnInit } from '@angular/core';
import {ConsulterMesComptesService} from "./consulter-mes-comptes.service";
import {AccountClass} from "./account-class.model";
import {ClientProService} from "../client-professionnel/client-pro.service";
import {ClientPro} from "../client-professionnel/client-pro";

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

  ngOnInit() {
this.getClient();
  }
  getClient () :void{
    this.clientProService.getClientByEmail().subscribe(
      (client : ClientPro)=>{
        this.client=client;
        console.log('Data:', client);
    } ,(error) => {
      console.error('Error:', error);
    }
    )
  }



}
