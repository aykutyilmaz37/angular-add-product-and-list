export class Product{
    public ProductName:string;
    public Qty:number;
    public Price:number;

    constructor(productName:string, qty:number,price:number) {
        this.ProductName = productName;
        this.Qty = qty;
        this.Price = price;
    }
}