import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticateService} from "./authenticate.service";
import {Router} from "@angular/router";
import {ClientProService} from "../client-professionnel/client-pro.service";

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.page.html',
  styleUrls: ['./authenticate.page.scss'],
})
export class AuthenticatePage implements OnInit {

  constructor(private fb:FormBuilder ,
              private authService : AuthenticateService,
              private clientService : ClientProService ,
              private router:Router) { }
 userFormGroup! : FormGroup;
  email !:string;
  password ! : string;
  loggedEmail !: string   |any;
  loggedClient !: ClientProService |any;
  ngOnInit() {
    this.loggedEmail = window.localStorage.getItem("email") ;

    this.loggedClient =  this.clientService.getClientByEmail(this.loggedEmail);



    this.userFormGroup =this.fb.group({
      email : this.fb.control('' , [Validators.email,Validators.required ]),
      password : this.fb.control('' , [Validators.required , Validators.minLength(8)])
    })
  }

  handleSubmit() {

    let res =this.authService.login(this.email,this.password)
    if(res){
      this.router.navigateByUrl("menu/consulterComptes")
    }else {
      this.router.navigateByUrl("authenticate")
    }
  }

}
