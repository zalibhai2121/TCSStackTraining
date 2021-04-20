import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product-price',
  templateUrl: './update-product-price.component.html',
  styleUrls: ['./update-product-price.component.css']
})
export class UpdateProductPriceComponent implements OnInit {
  updateMsg?: string;
  constructor(public productSer: ProductService) { }

  ngOnInit(): void {
  }
  updatePrice(productRef: any): void {
    console.log(productRef);
    this.productSer.updateProductById(productRef).subscribe((result: string) => {
      this.updateMsg = result;
    });
  }
}
