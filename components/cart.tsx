import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line import/no-unresolved
import { CartContext } from '../context/CartContext';
// eslint-disable-next-line import/no-unresolved
import CartItem from './cartItem';

import styles from '../styles/cart.module.scss';

export default function Cart() {
  const [cartItems, cartItemsTotal, totalAmount] = useContext(CartContext);

  const generateKey = () => `key-${Math.random()}-${Date.now()}`;

  return (
    <>
      <div className={`${styles.cart} p-3 is-unselectable`}>
        <h1 className="title is-size-5">Your Bag</h1>
        <h1 className="subtitle is-size-7">
          {`${cartItemsTotal} Items`}
        </h1>
        <div className={`columns is-flex-wrap-wrap ${styles.itemList}`}>
          {(cartItems.length > 0)
          && cartItems.map((obj) => (
            <CartItem item={obj} key={generateKey()} />
          ))}
        </div>

        {(cartItems.length > 0)
          && (
          <div className="columns">
            <div className="column is-12">
              <div className="columns">
                <div className="column is-4 is-flex is-align-content-center is-justify-content-center">
                  <button type="button" className={`${styles.deliveryBtn} px-5 is-clickable`}>
                    <FontAwesomeIcon icon={faTruck} />
                    Free
                  </button>
                </div>
                <div className="column has-text-left">
                  Total:
                  <p className={styles.totalPrice}>
                    $
                    { totalAmount }
                  </p>
                </div>
              </div>
            </div>
          </div>
          )}
      </div>
    </>
  );
}
