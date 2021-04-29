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

  const resetToHome = () => {
    setIsMenuOpen(true);
    setIsCartOpen(false);
  };

  return (
    <div className={styles.leftPanel}>
      <div className="box pb-2 px-0">
        <div className={`hero ${styles.header}`}>
          <div className={`hero-body px-0 ${styles.headerBody}`}>
            <nav className="columns is-mobile">
              <div className="column is-3 px-0 has-text-centered is-flex is-justify-content-center">
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
              <div className="column is-6 has-text-centered is-clickable">
                <div
                  className={`title has-text-white is-unselectable ${styles.logo}`}
                  onClick={() => resetToHome()}
                  onKeyPress={() => {}}
                  tabIndex={0}
                  role="button"
                >
                  Roomie
                </div>
              </div>
            </nav>
          </div>
          <div className="hero-footer">
            <div className="columns is-mobile">
              <div className="column is-3">
                <button className={styles.menuToggleBtn} type="button" style={{ visibility: 'hidden' }}>
                  <span className="icon has-text-white-ter">
                    <i className="fas fa-bars ">
                      {}
                    </i>
                  </span>
                </button>
              </div>
              <div className="column is-6">
                <p className={`subtitle has-text-white-ter mb-3 ${styles.subtitle}`}>
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
              <Paginator
                totalPage={totalPage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </>
          )}
        </div>

      </div>

      <div className="box">
        <div className="level is-mobile">
          <div className="level-left">
            <figure className="image is-48x48">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/48x48.png"
                alt="profile pic"
                draggable={false}
              />
            </figure>
          </div>
          <div className="level-item is-flex is-flex-direction-column is-align-items-start px-3">
            <div className="has-text-left">
              <h1 className={styles.userName}>Clark Robertson</h1>
              <h2 className={styles.userAddr}>San fransisco, California</h2>
            </div>
          </div>
          <div className="level-item">
            <CartButotn onClick={() => toggleCart()} />
          </div>
        </div>

      </div>
    </div>
  );
}
