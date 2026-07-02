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
