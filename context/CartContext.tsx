import {
  createContext, useState, useEffect, useCallback,
} from 'react';

export const CartContext = createContext(null);

// const testItems = [
//   {
//     id: 0,
//     name: 'Chair1',
//     img: '/images/chair1.jpg',
//     price: 120,
//     quantity: 1,
//   },
// ];

export const CartProvider = ({ children }: any) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (cartItems) {
      let total = 0;
      let amount = 0;
      cartItems.map((item) => {
        total += item.quantity;
        amount += (item.price) * (item.quantity);
        return item;
      });
      setTotalItems(total);
      setTotalAmount(amount);
    }
  }, [cartItems]);

  const addCartItem = useCallback((item) => {
    setCartItems((prevCartItems) => {
      const hasItem = prevCartItems.find((addedItem) => addedItem.id === item.id);

      if (hasItem) {
        const newCartItems = [...prevCartItems];
        newCartItems.map((i: any) => {
          const cartItem = i;
          if (cartItem.id === hasItem.id) {
            cartItem.quantity += 1;
          }
          return cartItem;
        });

        return newCartItems;
      }
      const newCartItems = prevCartItems ? [...prevCartItems] : [];
      newCartItems.push(item);

      return newCartItems;
    });
  }, []);

  const removeCartItem = useCallback((item) => {
    setCartItems((prevCartItems) => {
      let newCartItems = [...prevCartItems];
      const reducedItem = { ...item, quantity: (item.quantity - 1) };

      if (reducedItem.quantity > 0) {
        newCartItems.map((i) => {
          const cartItem = i;
          if (cartItem.id === reducedItem.id) cartItem.quantity = reducedItem.quantity;
          return cartItem;
        });
      } else {
        newCartItems = newCartItems.filter((cartItem) => cartItem !== item);
      }

      return newCartItems;
    });
  }, []);

  return (
    <CartContext.Provider value={[
      cartItems,
      totalItems,
      totalAmount,
      addCartItem,
      removeCartItem,
    ]}
    >
      {children}
    </CartContext.Provider>
  );
};
