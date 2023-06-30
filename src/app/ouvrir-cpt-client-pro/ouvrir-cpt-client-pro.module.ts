import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuvrirCptClientProPageRoutingModule } from './ouvrir-cpt-client-pro-routing.module';

import { OuvrirCptClientProPage } from './ouvrir-cpt-client-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OuvrirCptClientProPageRoutingModule
  ],
  declarations: [OuvrirCptClientProPage]
})
export class OuvrirCptClientProPageModule {}
