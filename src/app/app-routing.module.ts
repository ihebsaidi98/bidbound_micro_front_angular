import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { LivraisonComponent } from './livraison/livraison.component';

const routes: Routes = [

  {  path: 'adduser', component: UserComponent },
  {  path: 'product', component: ProductComponent },
  {  path: 'livraison', component: LivraisonComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
