import { Component, OnInit } from '@angular/core';
import {Compte} from "./Compte";

@Component({
  selector: 'app-type-de-compte',
  templateUrl: './type-de-compte.page.html',
  styleUrls: ['./type-de-compte.page.scss'],
})
export class TypeDeComptePage implements OnInit {
 cpt = new Compte();

  constructor() { }

  ngOnInit() {
  }

}
