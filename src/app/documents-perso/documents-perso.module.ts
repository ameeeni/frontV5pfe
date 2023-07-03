import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentsPersoPageRoutingModule } from './documents-perso-routing.module';

import { DocumentsPersoPage } from './documents-perso.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentsPersoPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DocumentsPersoPage]
})
export class DocumentsPersoPageModule {}
