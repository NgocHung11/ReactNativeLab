export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): void {
    console.log(`${this.name} sound animal.`);
  }
}

export class Dog extends Animal {
  bark(): void {
    console.log(`${this.name} Gau Gau!`);
  }
}

export class Cat extends Animal {
  meow(): void {
    console.log(`${this.name} meo  meo!`);
  }
}
