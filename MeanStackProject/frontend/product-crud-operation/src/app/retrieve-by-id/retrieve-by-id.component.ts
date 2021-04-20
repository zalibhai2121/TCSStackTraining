import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retrieve-by-id',
  templateUrl: './retrieve-by-id.component.html',
  styleUrls: ['./retrieve-by-id.component.css']
})
export class RetrieveByIdComponent implements OnInit {
  resultMsg?: string;
  constructor(public productSer: ProductService) { }

  ngOnInit(): void {
  }
  searchDetails(id: any): void {
    console.log('ID is: ' + id);
    this.productSer.retrieveProductById(id).subscribe(result => {
      if (result?.length > 0){
        this.resultMsg = 'Id is: ' + result[0]._id + ', Product name: ' + result[0].pname + ', and the Price is: ' + result[0].price;
      } else {
        this.resultMsg = 'Product not found';
      }
    });
  }

}
