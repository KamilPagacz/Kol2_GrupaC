import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KPDataService } from './kp-data.service';
import { ShopKPComponent } from './components/shop-kp/shop-kp.component';
import { ShopItemKPComponent } from './components/shop-item-kp/shop-item-kp.component';
import { ShopDetailsKPComponent } from './components/shop-details-kp/shop-details-kp.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopKPComponent,
    ShopItemKPComponent,
    ShopDetailsKPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [KPDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
