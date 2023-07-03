import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChoisirVotreComptePageRoutingModule } from './choisir-votre-compte-routing.module';

import { ChoisirVotreComptePage } from './choisir-votre-compte.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ChoisirVotreComptePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ChoisirVotreComptePage]
})
export class ChoisirVotreComptePageModule {}
