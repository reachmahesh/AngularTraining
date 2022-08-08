import { Component, OnInit } from '@angular/core';
import { productRecords } from 'src/repository/productRecords';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
product = productRecords;

  constructor() { }

  ngOnInit(): void {
  }

}
