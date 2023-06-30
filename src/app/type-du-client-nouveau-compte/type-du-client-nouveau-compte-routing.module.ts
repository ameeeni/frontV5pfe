import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TypeDuClientNouveauComptePage } from './type-du-client-nouveau-compte.page';

const routes: Routes = [
  {
    path: '',
    component: TypeDuClientNouveauComptePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypeDuClientNouveauComptePageRoutingModule {}
