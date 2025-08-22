export class Product{
    private name: string;
    private price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    public displayInfo(): void {
        console.log(`Product Name: ${this.name}, Price: ${this.price}`);
    }

}

   