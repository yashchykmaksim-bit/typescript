import Cart from '../service/Cart';
import Movie from "../domain/Movie";
test('new cart should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart should no empty', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Movie', 200, 2012, 'USA', 'Нетология отстой', ['Фантастика', 'Боевик'], 122));

  expect(cart.items.length).toBe(1);
});

test('totalCost should calculate correct sum of items', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Movie', 200, 2012, 'USA', 'Нетология отстой', ['Фантастика', 'Боевик'], 122));
  cart.add(new Movie(1, 'Movie', 200, 2012, 'USA', 'Нетология отстой', ['Фантастика', 'Боевик'], 122));
  expect(cart.totalCost()).toBe(400);
});

test('totalCostWithDiscount should calculate correct sum with discount', () => {
  const cart = new Cart();
  cart.add(new Movie(1, 'Movie', 200, 2012, 'USA', 'Нетология отстой', ['Фантастика', 'Боевик'], 122));
  cart.add(new Movie(1, 'Movie', 200, 2012, 'USA', 'Нетология отстой', ['Фантастика', 'Боевик'], 122));
  const discount = 10;
  const expectedTotal = 400 * (1 - discount / 100);

  expect(cart.totalCostWithDiscount(discount)).toBe(expectedTotal);
});

test('removeItemById should remove item correctly', () => {
  const cart = new Cart();
  const movie1 = new Movie(101, 'Киллер', 500, 2020, 'USA', 'Боевик', ['Триллер'], 120);
  const movie2 = new Movie(102, 'Комедия', 300, 2021, 'USA', 'Жанр', ['Комедия'], 100);
  const movie3 = new Movie(103, 'Ужастик', 400, 2019, 'USA', 'Жанр', ['Ужасы'], 90);

  cart.add(movie1);
  cart.add(movie2);
  cart.add(movie3);

  expect(cart.items.length).toBe(3);

  cart.removeItemById(102);

  expect(cart.items.length).toBe(2);
  expect(cart.items.some(item => item.id === 102)).toBe(false);
});
