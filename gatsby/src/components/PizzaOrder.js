import React from 'react';
import Img from 'gatsby-image';
import MenuItemStyles from '../styles/MenuItemStyles';
import calculatePizzaPrice from '../utils/calculatePizzaPrice';
import formatMoney from '../utils/formatMoney';

export default function PizzaOrder({ order, pizzas, removeFromOrder }) {
  return (
    <>
      {order.map((singleOrder, index) => {
        const currentPizza = pizzas.find(
          (pizza) => pizza.id === singleOrder.id
        );
        return (
          <MenuItemStyles key={`${singleOrder.id}-${index}`}>
            <Img
              fluid={currentPizza.image.asset.fluid}
              alt={currentPizza.name}
            />
            <h2>{currentPizza.name}</h2>
            <p>
              {formatMoney(
                calculatePizzaPrice(currentPizza.price, singleOrder.size)
              )}
              <button
                type="button"
                className="remove"
                title={`Remove ${singleOrder.size} ${currentPizza.name} from Order`}
                onClick={() => removeFromOrder(index)}
              >
                x
              </button>
            </p>
          </MenuItemStyles>
        );
      })}
    </>
  );
}
