import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line import/no-unresolved
import CategoryTiles from './categoryTiles';
// eslint-disable-next-line import/no-unresolved
import Paginator from './paginator';
// eslint-disable-next-line import/no-unresolved
import CartButotn from './cartButton';
// eslint-disable-next-line import/no-unresolved
import Cart from './cart';
// eslint-disable-next-line import/no-unresolved
import Category from '../interfaces/Category';

import styles from '../styles/leftPanel.module.scss';

export default function LeftPanel({ categories } : {categories: Category[]}) {
  const [totalPage, setTotalPage]: [number, any] = useState(null);
  const [currentPage, setCurrentPage]: [number, any] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const pageCount = Math.ceil(categories.length / 6);
    setTotalPage(pageCount);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={styles.leftPanel}>
      <div className="box pb-2 px-0">
        <div className={`hero ${styles.header}`}>
          <div className={`hero-body px-0 ${styles.headerBody}`}>
            <nav className="level is-mobile">
              <div className="level-left has-text-centered">
                <button
                  type="button"
                  className={`is-clickable ${styles.menuToggleBtn}`}
                  onClick={() => toggleMenu()}
                >
                  <span className="icon has-text-white-ter">
                    <FontAwesomeIcon icon={faBars} />
                  </span>
                </button>
              </div>
              <div className="level-item has-text-centered">
                <p className="title has-text-white-ter is-unselectable">
                  Roomie
                </p>
              </div>
            </nav>
          </div>
          <div className="hero-footer">
            <div className="level">
              <div className="level-left">
                <button className={styles.menuToggleBtn} type="button" style={{ visibility: 'hidden' }}>
                  <span className="icon has-text-white-ter">
                    <i className="fas fa-bars ">
                      {}
                    </i>
                  </span>
                </button>
              </div>
              <div className="level-item">
                <p className="subtitle is-size-7 has-text-white-ter mb-3">
                  Choose Room Type
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className={`${isMenuOpen ? '' : 'is-hidden'}`}>
          {isCartOpen ? (
            <>
              <Cart />
            </>
          ) : (
            <>
              <CategoryTiles
                categories={categories.slice(6 * (currentPage - 1), 6 * currentPage)}
              />
              {totalPage > 1
                ? (
                  <Paginator
                    totalPage={totalPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                )
                : <></>}
            </>
          )}
        </div>

      </div>

      <div className="box">
        <div className="level is-mobile">
          <div className="level-left">
            <figure className="image is-48x48">
              <img className="is-rounded" src="https://bulma.io/images/placeholders/48x48.png" alt="profile pic" />
            </figure>
          </div>
          <div className="level-item has-text-white is-flex is-flex-direction-column is-align-items-start px-3">

            <h1 className=" is-size-6 is-size-7-mobile">Clark Robertson</h1>
            <h2 className=" is-size-7 ">San fransisco, California</h2>

          </div>
          <div className="level-item">
            <CartButotn onClick={() => toggleCart()} />
          </div>
        </div>

      </div>
    </div>
  );
}
