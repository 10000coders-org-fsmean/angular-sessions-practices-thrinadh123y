import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products;
  constructor(private product:CommonService) { }

  ngOnInit() {
this.product.getProducts().subscribe((res)=>{
this.products=res;
})
  }

}
