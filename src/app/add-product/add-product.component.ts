import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../app.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  //public Model : Array<Product>;
  @Input() Model:Array<Product>;
  @Output() addProduct =new EventEmitter<Product>();

  public ProductName:string;
  public Qty:number;
  public Price:number;


  public btnAddProduct_Click():void{
    //alert(this.test);
    var product = new Product(this.ProductName,this.Qty,this.Price);
    this.addProduct.emit(product);
  }
  constructor() { 
    //this.Model = new Array<Product>();
  }

  ngOnInit() {
  }

}
