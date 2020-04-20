export class Tamagatchi {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.health = 10;
    this.fullness = 10;
    this.happiness = 10;
    this.tiredness = 10;
  }

  setLife() {
    setInterval(() => {
      this.tiredness--;
    }, 30000);
  }
}