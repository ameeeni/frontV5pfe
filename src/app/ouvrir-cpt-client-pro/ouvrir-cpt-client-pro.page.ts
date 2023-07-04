import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientPro} from "../client-professionnel/client-pro";
import {CptClientProService} from "./cpt-client-pro.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ouvrir-cpt-client-pro',
  templateUrl: './ouvrir-cpt-client-pro.page.html',
  styleUrls: ['./ouvrir-cpt-client-pro.page.scss'],
})
export class OuvrirCptClientProPage implements OnInit {
  ouvCptclientProForm! : FormGroup;
  clientPro = new ClientPro();
  constructor(private fb: FormBuilder , private dmdCptService : CptClientProService , private router :Router) { }

  ngOnInit() {
    this.ouvCptclientProForm = this.fb.group({
      firstname : this.fb.control('' , [Validators.required]),
       lastname: this.fb.control('' , [Validators.required]),
      email : this.fb.control('', [Validators.required , Validators.email]),
      phone: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      mot_de_passe : this.fb.control('', [Validators.required , Validators.minLength(8)]),
      adresse: this.fb.control('' , [Validators.required]),
    })

  }
  RegisterClientPro() {
    this.dmdCptService.SaveDemandeClientPro(this.clientPro).subscribe({

      next:(data=>{
        this.router.navigateByUrl("/authenticate");
      }),

      error:err => console.log(err)
    });
  }
}
