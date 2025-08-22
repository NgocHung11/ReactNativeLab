import { Person } from "./lab01/bai01";
import { Student } from "./lab01/bai02";
import { Car } from "./lab01/bai03";
import { Rectangle } from "./lab01/bai04";
import { BankAccount } from "./lab01/bai05";
import { Book } from "./lab01/bai06";
import { User } from "./lab01/bai07";
import { Product } from "./lab01/bai08";
import { Animal } from "./lab01/bai09";

//Bai 01: Person class
const person = new Person("Alice", 30);
person.displayInfo();

// Bai 02: Student class extending Person
const student = new Student("Bob", 20, "A");
student.displayInfo();

// Bai 03: Car class
const car = new Car("Toyota", "Corolla", 2020);
car.displayInfo();

// Bai 04: Rectangle class
let width = 5;
let height = 10;

const rectangle = new Rectangle(width, height);
console.log(`Area: ${rectangle.getArea()}`);    
console.log(`Perimeter: ${rectangle.getPerimeter()}`);


// Bai 05: BankAccount class
const bankAccount = new BankAccount(1000000);
bankAccount.deposit(500000);
bankAccount.withdraw(200000);

// Bai 06: Book class
const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
book.displayInfo();

// Bai 07: User class
const user = new User("john_doe");
console.log(`User name: ${user.getName()}`); 

console.log(`Update user name to "jane_doe"`);
user.setName("jane_doe");
user.displayInfo(); 

// Bai 08: Product class
const products: Product[] = [
    new Product("Product A", 50),
    new Product("Product B", 150),
    new Product("Product C", 200),
    new Product("Product D", 80),
];

products.forEach(product => product.displayInfo());

// Filter products with price > 100
const filteredProducts = products.filter(product => {
    return product['price'] > 100; 
});

console.log("Filtered Products (price > 100):");
filteredProducts.forEach(product => product.displayInfo());

// Bai 09: Animal interface
const dog: Animal = {
    name: "Buddy",
    sound: () => console.log("Gau! Gau!")
};


console.log(`Animal Name: ${dog.name}`);
dog.sound();