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
      this.happiness -= .5;
      this.fullness -= 2;
      this.age += 0.5;
    }, 30000);
  }

  feed() {
    this.fullness = 10;
  }

  play() {
    this.happiness = 10;
  }

  tuckIn() {
    this.tiredness = 10;
  }

}