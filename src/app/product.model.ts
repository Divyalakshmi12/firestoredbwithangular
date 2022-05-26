export class Product {
    Id:number;
    Name:string;
    Description:string;
    Price:number;
    prodImage:string

    constructor(Id:number, Name:string, Description:string,Price:number,prodImage:string){
        this.Id= Id;
        this.Name = Name;
        this.Description = Description;
        this.Price = Price;
        this.prodImage = prodImage
    }
}
