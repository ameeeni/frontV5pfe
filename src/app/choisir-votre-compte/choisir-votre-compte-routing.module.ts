import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChoisirVotreComptePage } from './choisir-votre-compte.page';

const routes: Routes = [
  {
    path: '',
    component: ChoisirVotreComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChoisirVotreComptePageRoutingModule {}
