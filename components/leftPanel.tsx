import { useEffect, useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import CategoryTiles from './categoryTiles';
// eslint-disable-next-line import/no-unresolved
import Paginator from './paginator';
// eslint-disable-next-line import/no-unresolved
import CartButotn from './cartButton';

import styles from '../styles/leftPanel.module.scss';

const categories = [
  {
    id: 0,
    name: 'Living Room',
  },
  {
    id: 1,
    name: 'Living Room',
  },
  {
    id: 2,
    name: 'Living Room',
  },
  {
    id: 3,
    name: 'Living Room',
  },
  {
    id: 4,
    name: 'Living Room',
  },
  {
    id: 5,
    name: 'Living Room',
  },
  {
    id: 6,
    name: 'Living Room',
  },
  {
    id: 7,
    name: 'Living Room',
  },
  {
    id: 8,
    name: 'Living Room',
  },
];

export default function LeftPanel() {
  const [totalPage, setTotalPage]: [number, any] = useState(null);
  const [currentPage, setCurrentPage]: [number, any] = useState(1);

  useEffect(() => {
    const pageCount = Math.ceil(categories.length / 6);
    setTotalPage(pageCount);
  }, []);

  return (
    <div className={styles.leftPanel}>
      <div className="box pb-2">
        <div className={`hero ${styles.header}`}>
          <div className={`hero-body px-0 ${styles.headerBody}`}>
            <nav className="level is-mobile">
              <div className="level-left has-text-centered">
                <button type="button" className="button is-clickable is-primary is-outlined">
                  <span className="icon has-text-white-ter">
                    <i className="fas fa-bars ">
                      {}
                    </i>
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
                <button type="button" style={{ visibility: 'hidden' }}>
                  sda
                </button>
              </div>
              <div className="level-item">
                <p className="subtitle is-size-7 has-text-white-ter mb-1">
                  Choose Room Type
                </p>
              </div>
            </div>

          </div>
        </div>

        <CategoryTiles categories={categories.slice(6 * (currentPage - 1), 6 * currentPage)} />

        <Paginator
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

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
            <CartButotn />
          </div>
        </div>

      </div>
    </div>
  );
}
