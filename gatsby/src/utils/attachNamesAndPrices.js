import formatMoney from './formatMoney';
import calculatePizzaPrice from './calculatePizzaPrice';

export default function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const currentPizza = pizzas.find((pizza) => pizza.id === item.id);
    return {
      ...item,
      name: currentPizza.name,
      thumbnail: currentPizza.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(currentPizza.price, item.size)),
    };
  });
}
