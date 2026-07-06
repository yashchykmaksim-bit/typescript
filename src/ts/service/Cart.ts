import Buyable from '../domain/Buyable';

export default class Cart {
  private _items: Buyable[] = [];

  add(item: Buyable): void {
    this._items.push(item);
  }
  get items(): Buyable[] {
    return [...this._items];
  }
  totalCost(): number {
    let sum: number = 0;
    for (const item of this._items) {
      sum += item.price;
    }
    return sum;
  }
  totalCostWithDiscount(discountPercent: number): number {
    return this.totalCost() * (1 - discountPercent / 100);
  }
  removeItemById(id: number): void {
    this._items = this._items.filter((item: Buyable) => item.id !== id);
  }
}
