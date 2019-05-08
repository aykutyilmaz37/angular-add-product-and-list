import { Component } from "@angular/core";
import { Product } from "./app.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public Model: Array<Product>;
  
  addProduct($event) {
    this.Model.push($event);
    console.log(JSON.stringify($event));
  }
  constructor(){
    this.Model = new Array<Product>();  
  }
}
