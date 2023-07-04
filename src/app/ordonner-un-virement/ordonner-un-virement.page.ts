import { Component, OnInit } from '@angular/core';
import {format, parseISO} from 'date-fns'
import {Virement} from "./virement";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientPro} from "../client-professionnel/client-pro";
import {Compte} from "../choisir-votre-compte/Compte";
import {ClientProService} from "../client-professionnel/client-pro.service";
import {VirementService} from "./virement.service";

@Component({
  selector: 'app-ordonner-un-virement',
  templateUrl: './ordonner-un-virement.page.html',
  styleUrls: ['./ordonner-un-virement.page.scss'],
})
export class OrdonnerUnVirementPage implements OnInit {
  showPicker!: boolean;
  dateValue= format(new Date() , "yyyy-MM-dd" )+ "T09:00:00.000Z";
  formatedString="";

 virement = new Virement ();
 virementForm! : FormGroup;
  email :any   ;
  listeDesComptes !:Compte ;
  compte !:Compte ;
  client = new ClientPro();
  ibancnct!:string ;
  constructor(private fb: FormBuilder ,private clientProService: ClientProService ,private virementService : VirementService) {
    this.setToday();
  }

  ngOnInit() {
    this.email =window.localStorage.getItem("email");
    console.log(this.email) ;
    this.getClient();
    console.log(this.ibancnct) ;

    this.virementForm = this.fb.group({
      ibandebiteur : this.fb.control('' , [Validators.required , Validators.maxLength(34 )] ),
      ibanbeneficiere : this.fb.control('' ,[Validators.required , Validators.maxLength(34 )]),
      type : this.fb.control('' ,[Validators.required]),
      date_de_transaction : this.fb.control('' ,[Validators.required]),
      montant : this.fb.control('',[Validators.required])
    })

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
        this.ibancnct = this.listeDesComptes.iban ;
        console.log(this.ibancnct);

      } ,(error) => {
        console.error('Error:', error);
      }
    )
  }
  setToday(){
    this.formatedString=format(parseISO(format(new Date() , 'yyyy-MM-dd') +'T09:00:00.000Z') , 'HH:mm, MMM dd,  yyyy')
  }

  dateChanged(value:any) {
    this.dateValue=value;
    this.formatedString= format(parseISO(value) , 'HH:mm, MMM dd,  yyyy')
    this.showPicker=false;
  }

  postVirement() {
    this.virement.ibandebiteur = this.ibancnct ;

    this.virementService.SaveVirement(this.virement).subscribe(data =>{
    console.log(data) ;
    })
  }
}
