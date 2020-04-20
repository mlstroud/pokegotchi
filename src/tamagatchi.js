export class Tamagatchi {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.health = 10;
    this.fullness = 10;
    this.happiness = 10;
    this.tiredness = 10;
    this.sick = false;
    this.medsAllowed = false;
    this.medsOffered = false;
    this.poop = false;
  }

  setLife() {
    setInterval(() => {
      this.tiredness--;
      this.happiness -= .5;
      this.fullness -= 2;
      this.age += 0.5;

      // if (this.fullness <= 3) {
      //   this.health -= 2;
      // } else if (this.fullness >= 8 || !this.sick) {
      //   this.health += 1;
      // }

      if (this.tiredness <= 3) {
        this.health--;
      }

      if (this.happiness <= 3) {
        this.health--;
      }

      if (this.health <= 4) {
        this.sick = true;
      }

      if (this.sick === true && this.medsOffered === false) {
        this.allowMedicine();
      }

      if (this.age % 1.5 === 0) {
        this.poopFunction();
      }

      if (this.fullness <= 3) {
        this.health -= 2;
      } else if (this.fullness >= 8 || !this.sick) {
        this.health += 1;
      }


    }, 30000);
  }

  poopFunction() {
    this.poop = true;
    setTimeout(() => {
      if (this.poop === true) {
        this.sick = true;
      }
    }, 30000);
  }

  cleanPoop() {
    this.poop = false;
  }

  allowMedicine() {
    this.medsAllowed = true;
    setTimeout(() => {
      this.medsAllowed = false;
      this.medsOffered = true;
    }, 10001);
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

  medicine() {
    this.health = 5;
    this.sick = false;
  }
}