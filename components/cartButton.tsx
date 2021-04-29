import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line import/no-unresolved
import { CartContext } from '../context/CartContext';

export default function CartButton({
  onClick,
}: {
  onClick : any
}) {
  const [, total] = useContext(CartContext);
  return (
    <>
      <button className="is-clickable" type="button" onClick={onClick}>
        {(total > 0)
        && <span>{total}</span>}
        <FontAwesomeIcon icon={faShoppingBag} />
      </button>
      <style jsx>
        {`
            button{
                background: transparent;
                border: 1px solid #78767e;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                color: white;
                position: relative;
                transition: all .5s;
                outline: none;
            }
            span{
                position: absolute;
                left: -10px;
                border: none;
                border-radius: 50%;
                width: 16px;
                height: 16px;
                padding: .4em;
                font-size: .6rem;
                background-color: #2C83F9;
                animation-name: popUp;
                animation-duration: .2s;
                transition: all .2s ease-in-out;
            }
            @keyframes popUp {
              from {transform: scale(0)}
              to {transform: scale(1)}
            }
            i{
                color: white;
            }
            button:hover {
                background: black;
                border-color: black;
            }
        `}
      </style>
    </>
  );
}
