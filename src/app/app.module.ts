import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DetailsProductsComponent } from './views/details-products/details-products.component';
import { ContactComponent } from './views/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableProductsComponent } from './components/table-products/table-products.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsProductsComponent,
    ContactComponent,
    NavbarComponent,
    TableProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
