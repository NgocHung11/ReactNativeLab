"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai01_1 = require("./lab01/bai01");
const bai02_1 = require("./lab01/bai02");
const bai03_1 = require("./lab01/bai03");
const bai04_1 = require("./lab01/bai04");
const bai05_1 = require("./lab01/bai05");
const bai06_1 = require("./lab01/bai06");
const bai07_1 = require("./lab01/bai07");
const bai08_1 = require("./lab01/bai08");
const bai10_1 = require("./lab01/bai10");
const bai11_1 = require("./lab01/bai11");
//Bai 01: Person class
const person = new bai01_1.Person("Alice", 30);
person.displayInfo();
// Bai 02: Student class extending Person
const student = new bai02_1.Student("Bob", 20, "A");
student.displayInfo();
// Bai 03: Car class
const car = new bai03_1.Car("Toyota", "Corolla", 2020);
car.displayInfo();
// Bai 04: Rectangle class
let width = 5;
let height = 10;
const rectangle = new bai04_1.Rectangle(width, height);
console.log(`Area: ${rectangle.getArea()}`);
console.log(`Perimeter: ${rectangle.getPerimeter()}`);
// Bai 05: BankAccount class
const bankAccount = new bai05_1.BankAccount(1000000);
bankAccount.deposit(500000);
bankAccount.withdraw(200000);
// Bai 06: Book class
const book = new bai06_1.Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
book.displayInfo();
// Bai 07: User class
const user = new bai07_1.User("john_doe");
console.log(`User name: ${user.getName()}`);
console.log(`Update user name to "jane_doe"`);
user.setName("jane_doe");
user.displayInfo();
// Bai 08: Product class
const products = [
    new bai08_1.Product("Product A", 50),
    new bai08_1.Product("Product B", 150),
    new bai08_1.Product("Product C", 200),
    new bai08_1.Product("Product D", 80),
];
products.forEach(product => product.displayInfo());
// Filter products with price > 100
const filteredProducts = products.filter(product => {
    return product['price'] > 100;
});
console.log("Filtered Products (price > 100):");
filteredProducts.forEach(product => product.displayInfo());
// Bai 09: Animal interface
const dog = {
    name: "Buddy",
    sound: () => console.log("Gau! Gau!")
};
console.log(`Animal Name: ${dog.name}`);
dog.sound();
// Bai 10: Account class
const account = new bai10_1.Account("123456789", 1000);
console.log(`Account Number: ${account.accountNumber}`);
// Bai 11: Animal class with Dog and Cat subclasses
const dog2 = new bai11_1.Dog("Rex");
dog2.speak();
dog2.bark();
const cat = new bai11_1.Cat("Whiskers");
cat.speak();
cat.meow();
// Bai 12: Flyable and Swimmable interfaces with Bird and Fish classes
const bai12_1 = require("./lab01/bai12");
const bird = new bai12_1.Bird();
bird.fly();
const fish = new bai12_1.Fish();
fish.swim();
// Bai 13 
const bai13_1 = require("./lab01/bai13");
const square = new bai13_1.Square(4);
console.log(`Square area: ${square.area()}`);
const circle = new bai13_1.Circle(3);
console.log(`Circle area: ${circle.area()}`);
