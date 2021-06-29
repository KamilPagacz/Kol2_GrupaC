import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopDetailsKPComponent } from './components/shop-details-kp/shop-details-kp.component';
import { ShopKPComponent } from './components/shop-kp/shop-kp.component';

const routes: Routes = [
  {
    path:'shop',
    component: ShopKPComponent
  },
  {
    path:'shop/:id',
    component: ShopDetailsKPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
