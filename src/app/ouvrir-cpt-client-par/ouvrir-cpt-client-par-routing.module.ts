import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OuvrirCptClientParPage } from './ouvrir-cpt-client-par.page';

const routes: Routes = [
  {
    path: '',
    component: OuvrirCptClientParPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OuvrirCptClientParPageRoutingModule {}
