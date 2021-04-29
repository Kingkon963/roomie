import { useContext } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

// eslint-disable-next-line import/no-unresolved
import { CartContext } from '../context/CartContext';

export default function CartItem({ item }: any) {
  const [cartItems, , , , removeCartItem] = useContext(CartContext);
  return (
    <div className="column is-12">
      <div className="columns">
        <div className="column is-4">
          <Image src={item.img} unsized />
        </div>
        <div className="column is-6 has-text-left">
          <h1>{item.name}</h1>
          <p>
            $
            {item.price}
          </p>
        </div>
        <div className="column is-2">
          x
          {item.quantity}
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="is-clickable"
            onClick={() => removeCartItem(cartItems, item)}
          />
        </div>
      </div>
    </div>
  );
}
