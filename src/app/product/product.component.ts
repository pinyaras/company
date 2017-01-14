import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    //this.title.setTitle('Prouct');
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe(product => this.product = product);
  }

  onShowDetail(product: Product) {
  
    this.router.navigate(['/product', product.id]);

  }

}
