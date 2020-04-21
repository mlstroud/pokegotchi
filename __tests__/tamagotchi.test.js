import { Tamagotchi } from '../src/tamagotchi.js';

describe('Tamagatchi', () => {
  let thisTamagotchi;
  jest.useFakeTimers();

  beforeEach(function () {
    thisTamagotchi = new Tamagotchi("Jimmy");
    thisTamagotchi.setLife();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test('should create a new tamagatchi with a name and default stats', () => {
    expect(thisTamagotchi.name).toEqual('Jimmy');
    expect(thisTamagotchi.age).toEqual(0);
    expect(thisTamagotchi.health).toEqual(10);
    expect(thisTamagotchi.fullness).toEqual(10);
    expect(thisTamagotchi.happiness).toEqual(10);
    expect(thisTamagotchi.tiredness).toEqual(10);
    expect(thisTamagotchi.sick).toEqual(false);

  });

  test('should have a tiredness of 9 after 30001 milliseconds ', () => {
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.tiredness).toEqual(9);

  });

  test('should have a happiness of 9 after 60001 milliseconds ', () => {
    jest.advanceTimersByTime(60001);
    expect(thisTamagotchi.happiness).toEqual(9);

  });

  test('should have a fullness of 8 after 30001 milliseconds ', () => {
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.fullness).toEqual(8);

  });

  test('should have an age of 1 after 60001 milliseconds', () => {
    jest.advanceTimersByTime(60001);
    expect(thisTamagotchi.age).toEqual(1);
  });

  test('should increase fullness to max (10)', () => {
    jest.advanceTimersByTime(90001);
    thisTamagotchi.feed();
    expect(thisTamagotchi.fullness).toEqual(10);
  });

  test('should increase happiness to max(10)', () => {
    jest.advanceTimersByTime(90001);
    thisTamagotchi.play();
    expect(thisTamagotchi.happiness).toEqual(10);
  });

  test('should increase tiredness to max(10)', () => {
    jest.advanceTimersByTime(90001);
    thisTamagotchi.tuckIn();
    expect(thisTamagotchi.tiredness).toEqual(10);
  });

  test('should decrease health by 2 if fullness reaches 3', () => {
    thisTamagotchi.fullness = 3;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.health).toEqual(8);
  });

  test('should decrease health by 1 if happiness reaches 3 without boost from fullness health boost', () => {
    thisTamagotchi.happiness = 3;
    thisTamagotchi.fullness = 7;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.health).toEqual(9);
  });

  test('should decrease health by 1 if tiredness reaches 3 without boost from fullness health boost', () => {
    thisTamagotchi.tiredness = 3;
    thisTamagotchi.fullness = 7;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.health).toEqual(9);

  });

  test('should change the sick element of Tamagatchi to be true when health reaches 4 or less', () => {
    thisTamagotchi.health = 4;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.sick).toEqual(true);
  });

  test('medicine should change the sick element of Tamagatchi to be false and increase health to 5', () => {
    thisTamagotchi.health = 4;
    jest.advanceTimersByTime(30001);
    thisTamagotchi.medicine();
    expect(thisTamagotchi.sick).toEqual(false);
    expect(thisTamagotchi.health).toEqual(5);

  });

  test('test if medicine is allowed for 10 seconds when the tamagatchi becomes sick', () => {
    thisTamagotchi.health = 4;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.medsAllowed).toEqual(true);
    jest.advanceTimersByTime(10001);
    expect(thisTamagotchi.medsAllowed).toEqual(false);
  });

  test('test if the tamagatchi poops every 1.5 minutes', () => {
    jest.advanceTimersByTime(90001);
    expect(thisTamagotchi.poop).toEqual(true);
  });

  test('test if the tamagatchi gets sick if poop isnt cleaned within 30 seconds', () => {
    jest.advanceTimersByTime(90001);
    expect(thisTamagotchi.poop).toEqual(true);
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.sick).toEqual(true);
  });

  test('test if cleaning the poop changes the poop element and prevents sickness', () => {
    jest.advanceTimersByTime(90001);
    expect(thisTamagotchi.poop).toEqual(true);
    thisTamagotchi.cleanPoop();
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.sick).toEqual(false);
  });

  test('test if tamagatchi is healed when fullness is >= 8', () => {
    thisTamagotchi.health = 7;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.health).toEqual(8);
  });

  // test('observe the tamagatchi through several intervals', () => {
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(30001);
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(30001);
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(30001);
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(7000);
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(23001)
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(30001);
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(30001);
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(30001);
  //   console.log(thisTamagotchi);
  //   jest.advanceTimersByTime(30001);

  //   expect(thisTamagotchi.age).toEqual(4);
  // });

  // test('tests if when the tamagatchi is sick, it loses health at a faster rate', () => {
  //   thisTamagotchi.sick = true;
  //   thisTamagotchi.happiness = 8;
  //   thisTamagotchi.fullness = 3;
  //   thisTamagotchi.health = 5;
  //   thisTamagotchi.healthMult = 1.5;
  //   jest.advanceTimersByTime(30001);
  //   expect(thisTamagotchi.health).toEqual(2);
  // });

  test('tests if healthMult is changed when the tamagatchi gets sick', () => {
    expect(thisTamagotchi.healthMult).toEqual(1);
    thisTamagotchi.health = 4;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.healthMult).toEqual(1.5);
  });

  test('tests if when the tamagatchi is sick, it loses health at a faster rate', () => {
    expect(thisTamagotchi.healthMult).toEqual(1);
    thisTamagotchi.health = 4;
    thisTamagotchi.fullness = 3;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.healthMult).toEqual(1.5);
    expect(thisTamagotchi.health).toEqual(1);
  });

  test('tests if the feed function is impaired by sickness', () => {
    thisTamagotchi.sick = true;
    thisTamagotchi.fullness = 5;
    thisTamagotchi.feed();
    expect(thisTamagotchi.fullness).toEqual(7);
  });

  test('tests if the play function is impaired by sickness', () => {
    thisTamagotchi.sick = true;
    thisTamagotchi.happiness = 5;
    thisTamagotchi.play();
    expect(thisTamagotchi.happiness).toEqual(7);
  });

  test('tests if the sleep function is impaired by sickness', () => {
    thisTamagotchi.sick = true;
    thisTamagotchi.tiredness = 5;
    thisTamagotchi.tuckIn();
    expect(thisTamagotchi.tiredness).toEqual(7);
  });

  test('tests if the tamagatchis life stage increases every 150001 milliseconds', () => {
    jest.advanceTimersByTime(150001);
    expect(thisTamagotchi.lifeStage).toEqual(1);
    jest.advanceTimersByTime(150001);
    expect(thisTamagotchi.lifeStage).toEqual(2);
    jest.advanceTimersByTime(150001);
    expect(thisTamagotchi.lifeStage).toEqual(3);
    jest.advanceTimersByTime(150001);
    expect(thisTamagotchi.lifeStage).toEqual(3);

  });

  test('tests if the tamagatchi gets sick at 6 health level if they have a life stage of 3', () => {
    thisTamagotchi.lifeStage = 3;
    thisTamagotchi.health = 6;
    jest.advanceTimersByTime(30001);
    expect(thisTamagotchi.sick).toEqual(true);
  });



});