import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataProductsService, Products } from '../../services/data-products.service';
@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.css']
})
export class DetailsProductsComponent {

  product?: Products;

  constructor(private route: ActivatedRoute, private dataServiceProducts: DataProductsService) {
    this.route.params.subscribe(params => {
      this.product = dataServiceProducts.listProducts.filter(item => item.id == params['id'])[0];
    });
  }

}
