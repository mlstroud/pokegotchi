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







});