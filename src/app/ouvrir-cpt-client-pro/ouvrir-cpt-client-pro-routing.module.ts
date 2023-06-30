import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OuvrirCptClientProPage } from './ouvrir-cpt-client-pro.page';

const routes: Routes = [
  {
    path: '',
    component: OuvrirCptClientProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OuvrirCptClientProPageRoutingModule {}
