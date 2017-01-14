import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id:number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => this.id = params['id']);
    console.log(this.id);
  }

}
