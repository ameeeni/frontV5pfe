import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientPro} from "../client-professionnel/client-pro";
import {CptClientProService} from "./cpt-client-pro.service";

@Component({
  selector: 'app-ouvrir-cpt-client-pro',
  templateUrl: './ouvrir-cpt-client-pro.page.html',
  styleUrls: ['./ouvrir-cpt-client-pro.page.scss'],
})
export class OuvrirCptClientProPage implements OnInit {
  ouvCptclientProForm! : FormGroup;
  clientPro = new ClientPro();
  constructor(private fb: FormBuilder , private dmdCptService : CptClientProService) { }

  ngOnInit() {
    this.ouvCptclientProForm = this.fb.group({
      firstname : this.fb.control('' , [Validators.required]),
       lastname: this.fb.control('' , [Validators.required]),
      email : this.fb.control('', [Validators.required , Validators.email]),
      phone: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      mot_de_passe : this.fb.control('', [Validators.required , Validators.minLength(8)]),
      matricule_fiscale : this.fb.control('' ,[Validators.required]),
      raison_social :  this.fb.control('' ,[Validators.required]) ,
      numero_registre_commerce : this.fb.control('' ,[Validators.required])
    })
    console.log(this.RegisterClientPro())
  }
  RegisterClientPro() {
    this.dmdCptService.SaveDemandeClientPro(this.clientPro).subscribe({

      next:data=>data,
      error:err => console.log(err)
    });
  }
}
