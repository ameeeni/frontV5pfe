import { Component, OnInit } from '@angular/core';
import {ClientPar} from "../client-particulier/client-par";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-ouvrir-cpt-client-par',
  templateUrl: './ouvrir-cpt-client-par.page.html',
  styleUrls: ['./ouvrir-cpt-client-par.page.scss'],
})
export class OuvrirCptClientParPage implements OnInit {
  clientPar = new ClientPar();
  ouvrCptclientParForm !: FormGroup;
  constructor(private fb : FormBuilder) { }

  ngOnInit( ) {
    this.ouvrCptclientParForm = this.fb.group({
      firstname : this.fb.control('' , [Validators.required]),
      lastname: this.fb.control('' , [Validators.required]),
      email : this.fb.control('', [Validators.required , Validators.email]),
      phone: this.fb.control('', [Validators.required , Validators.maxLength(8)]),
      mot_de_passe : this.fb.control('', [Validators.required , Validators.minLength(8)]),
      reValidpassword : this.fb.control('' , [Validators.required , Validators.minLength(8)]),
      cin : this.fb.control('' , [Validators.required]),
      date_de_naissance : this.fb.control('', [Validators.required]),
      lieu_de_naissance : this.fb.control('', [Validators.required]),
      profession : this.fb.control('', [Validators.required]),
      status: this.fb.control('', [Validators.required])
  });


}}
