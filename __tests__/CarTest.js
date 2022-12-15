const Car = require('../src/models/Car');

describe('Car 클래스 테스트', () => {
  test('Car 객체 생성', () => {
    const car = new Car('test');
    expect(car.getCarInfo().name).toBe('test');
    expect(car.getCarInfo().position).toBe(0);
  });

  test('Car 객체 생성 후 move 호출', () => {
    const car = new Car('test');
    car.move();
    expect(car.getCarInfo().position).toBe(1);
  });
});
