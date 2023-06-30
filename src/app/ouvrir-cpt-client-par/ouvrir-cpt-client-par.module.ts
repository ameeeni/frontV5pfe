import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OuvrirCptClientParPageRoutingModule } from './ouvrir-cpt-client-par-routing.module';

import { OuvrirCptClientParPage } from './ouvrir-cpt-client-par.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OuvrirCptClientParPageRoutingModule
  ],
  declarations: [OuvrirCptClientParPage]
})
export class OuvrirCptClientParPageModule {}
