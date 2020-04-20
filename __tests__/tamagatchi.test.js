import { Tamagatchi } from './../src/tamagatchi.js';

describe('Tamagatchi', () => {
  let thisTamagatchi;
  jest.useFakeTimers();

  beforeEach(function () {
    thisTamagatchi = new Tamagatchi("Jimmy");
    thisTamagatchi.setLife();
  });

  afterEach(function () {
    jest.clearAllTimers();
  });

  test('should create a new tamagatchi with a name and default stats', () => {
    expect(thisTamagatchi.name).toEqual('Jimmy');
    expect(thisTamagatchi.age).toEqual(0);
    expect(thisTamagatchi.health).toEqual(10);
    expect(thisTamagatchi.fullness).toEqual(10);
    expect(thisTamagatchi.happiness).toEqual(10);
    expect(thisTamagatchi.tiredness).toEqual(10);
    expect(thisTamagatchi.sick).toEqual(false);

  });

  test('should have a tiredness of 9 after 30001 milliseconds ', () => {
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.tiredness).toEqual(9);

  });

  test('should have a happiness of 9 after 60001 milliseconds ', () => {
    jest.advanceTimersByTime(60001);
    expect(thisTamagatchi.happiness).toEqual(9);

  });

  test('should have a fullness of 8 after 30001 milliseconds ', () => {
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.fullness).toEqual(8);

  });

  test('should have an age of 1 after 60001 milliseconds', () => {
    jest.advanceTimersByTime(60001);
    expect(thisTamagatchi.age).toEqual(1);
  });

  test('should increase fullness to max (10)', () => {
    jest.advanceTimersByTime(90001);
    thisTamagatchi.feed();
    expect(thisTamagatchi.fullness).toEqual(10);
  });

  test('should increase happiness to max(10)', () => {
    jest.advanceTimersByTime(90001);
    thisTamagatchi.play();
    expect(thisTamagatchi.happiness).toEqual(10);
  });

  test('should increase tiredness to max(10)', () => {
    jest.advanceTimersByTime(90001);
    thisTamagatchi.tuckIn();
    expect(thisTamagatchi.tiredness).toEqual(10);
  });

  test('should decrease health by 2 if fullness reaches 3', () => {
    thisTamagatchi.fullness = 3;
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.health).toEqual(8);
  });

  test('should decrease health by 1 if happiness reaches 3', () => {
    thisTamagatchi.happiness = 3;
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.health).toEqual(9);
  });

  test('should decrease health by 1 if tiredness reaches 3', () => {
    thisTamagatchi.tiredness = 3;
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.health).toEqual(9);

  });

  test('should change the sick element of Tamagatchi to be true when health reaches 4 or less', () => {
    thisTamagatchi.health = 4;
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.sick).toEqual(true);
  });

  test('medicine should change the sick element of Tamagatchi to be false and increase health to 5', () => {
    thisTamagatchi.health = 4;
    jest.advanceTimersByTime(30001);
    thisTamagatchi.medicine();
    expect(thisTamagatchi.sick).toEqual(false);
    expect(thisTamagatchi.health).toEqual(5);

  });

  test('test if medicine is allowed for 10 seconds when the tamagatchi becomes sick', () => {
    thisTamagatchi.health = 4;
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.medsAllowed).toEqual(true);
    jest.advanceTimersByTime(10001);
    expect(thisTamagatchi.medsAllowed).toEqual(false);
  });

  test('test if the tamagatchi poops every 1.5 minutes', () => {
    jest.advanceTimersByTime(90001);
    expect(thisTamagatchi.poop).toEqual(true);
  });

  test('test if the tamagatchi gets sick if poop isnt cleaned within 30 seconds', () => {
    jest.advanceTimersByTime(90001);
    expect(thisTamagatchi.poop).toEqual(true);
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.sick).toEqual(true);
  });

  test('test if cleaning the poop changes the poop element and prevents sickness', () => {
    jest.advanceTimersByTime(90001);
    expect(thisTamagatchi.poop).toEqual(true);
    thisTamagatchi.cleanPoop();
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.sick).toEqual(false);
  });

  test('test if tamagatchi is healed when fullness is >= 8', () => {
    thisTamagatchi.health = 7;
    jest.advanceTimersByTime(30001);
    expect(thisTamagatchi.health).toEqual(8);
  });

  test('observe the tamagatchi through several intervals', () => {
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(30001);
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(30001);
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(30001);
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(7000);
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(23001)
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(30001);
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(30001);
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(30001);
    console.log(thisTamagatchi);
    jest.advanceTimersByTime(30001);

    expect(thisTamagatchi.age).toEqual(2.5);
  });
  // have a true or false property of tamagatchi that adds a multiplier to the health decreasers

  // evolve after x amount of time.



});