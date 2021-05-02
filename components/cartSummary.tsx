import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/cartSummary.module.scss';

export default function CartSammary({ totalAmount }: {totalAmount: number}) {
  return (
    <>
      <div className="columns cartSummary">
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
      <style jsx>
        {`
          .cartSummary {
          }
          @keyframes fade{
            from{
              opacity: 0;
            }
            to{
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
}
