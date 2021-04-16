// eslint-disable-next-line import/no-unresolved
import CategoryTiles from './categoryTiles';

import styles from '../styles/leftPanel.module.scss';

export default function LeftPanel() {
  return (
    <div className={styles.leftPanel}>
      <div className="box">
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

        <CategoryTiles />

        <div className="block">
          Pagination
        </div>

      </div>
      <div className="box">
        {}
      </div>
    </div>
  );
}
