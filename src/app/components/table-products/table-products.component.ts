import { Component, OnInit } from '@angular/core';
import { DataProductsService, Products } from '../../services/data-products.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {

  listProducts: Products[] = [];

  constructor(private dataServiceProducts: DataProductsService) {}

  ngOnInit(): void {
    this.listProducts = this.dataServiceProducts.listProducts;
  }

  searchProduct(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value.toLowerCase();
    this.listProducts = this.dataServiceProducts.listProducts.filter(item =>
      item.name?.toLowerCase().includes(inputValue)
    );
  }

}
