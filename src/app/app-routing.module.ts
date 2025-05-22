import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DetailsProductsComponent } from './views/details-products/details-products.component';
import { ContactComponent } from './views/contact/contact.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'details/:id', component : DetailsProductsComponent},
  {path : 'contact', component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
