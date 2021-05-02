import { useContext, useState, useEffect } from 'react';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// eslint-disable-next-line import/no-unresolved
import { CartContext } from '../context/CartContext';
// eslint-disable-next-line import/no-unresolved
import CartItem from './cartItem';
// eslint-disable-next-line import/no-unresolved
import CartSummary from './cartSummary';

import styles from '../styles/cart.module.scss';

export default function Cart() {
  const [cartItems, cartItemsTotal, totalAmount] = useContext(CartContext);
  const [items, setItems] = useState(<></>);

  const generateKey = () => `CartItem-${Math.random()}-${Date.now()}`;

  useEffect(() => {
    setItems(cartItems.map((obj) => (
      <CSSTransition
        in={obj !== undefined}
        enter
        exit
        classNames="fade"
        timeout={500}
      >
        <CartItem item={obj} key={generateKey()} />
      </CSSTransition>
    )));
  }, [cartItems.length]);

  return (
    <>
      <div className={`${styles.cart} p-3 is-unselectable`}>
        <h1 className="title is-size-5">Your Bag</h1>
        <h1 className="subtitle is-size-7">
          {`${cartItemsTotal} Items`}
        </h1>
        <div className={`columns is-flex-wrap-wrap ${styles.itemList}`}>
          <TransitionGroup>
            {items}
          </TransitionGroup>
        </div>

        <CartSummary totalAmount={totalAmount} />

      </div>
    </>
  );
}
