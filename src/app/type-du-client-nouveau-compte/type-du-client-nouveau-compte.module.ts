import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypeDuClientNouveauComptePageRoutingModule } from './type-du-client-nouveau-compte-routing.module';

import { TypeDuClientNouveauComptePage } from './type-du-client-nouveau-compte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypeDuClientNouveauComptePageRoutingModule
  ],
  declarations: [TypeDuClientNouveauComptePage]
})
export class TypeDuClientNouveauComptePageModule {}
