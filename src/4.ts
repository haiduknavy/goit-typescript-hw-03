class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    getSignature(): number {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Person[] = [];
  
    constructor(key: Key) {
      this.key = key;
    }
  
    comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log('Person entered the house.');
      } else {
        console.log('Door is closed. Person cannot enter.');
      }
    }
  
    abstract openDoor(key: Key): void;
  }
  
  class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
  
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('Door opened.');
      } else {
        console.log('Wrong key. Door remains closed.');
      }
    }
  }
  
  // Тестування
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey()); 
  house.comeIn(person); 
  