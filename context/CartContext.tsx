import { createContext, useState, useEffect } from 'react';

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

  const addCartItem = (prevCartItems, item) => {
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

      setCartItems(newCartItems);
    } else {
      const newCartItems = prevCartItems ? [...prevCartItems] : [];
      newCartItems.push(item);

      setCartItems(newCartItems);
    }
  };

  const removeCartItem = (prevCartItems, item) => {
    let newCartItems = [...prevCartItems];
    const reducedItem = { ...item, quantity: (item.quantity - 1) };
    console.log(reducedItem);
    if (reducedItem.quantity > 0) {
      newCartItems.map((i) => {
        const cartItem = i;
        if (cartItem.id === reducedItem.id) cartItem.quantity = reducedItem.quantity;
        return cartItem;
      });
      console.log(newCartItems);
    } else {
      newCartItems = newCartItems.filter((cartItem) => cartItem !== item);
    }

    setCartItems(newCartItems);
  };

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
