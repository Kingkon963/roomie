import { useContext, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// eslint-disable-next-line import/no-unresolved
import { CategoryContext } from '../context/CategoryContext';
// eslint-disable-next-line import/no-unresolved
import Category from '../interfaces/Category';

import styles from '../styles/categoryTiles.module.scss';

export default function CategoryTiles({ categories }: { categories: Category[] }) {
  const [category, setCategory] = useContext(CategoryContext);
  const [tiles, setTiles] = useState([]);

  const toggleCategory = (cat) => {
    setCategory(cat);
  };

  const generateKey = () => `key-${Math.random()}-${Date.now()}`;
  const isSelected = (id: number) => {
    if (category) {
      if (id === category.id) return true;
    }
    return false;
  };

  useEffect(() => {
    if (categories) {
      const updatedTiles = categories.map((cat) => (
        <div
          className="column is-6 p-0"
          onClick={() => toggleCategory(cat)}
          onKeyPress={() => {}}
          key={generateKey()}
          role="button"
          tabIndex={0}
        >
          <div
            className={`is-flex is-justify-content-center is-align-items-center 
            ${styles.tile} ${isSelected(cat.id) ? styles.isSelected : ''}`}
          >
            <span className="icon-text is-flex is-flex-direction-column is-align-items-center">
              <span className="icon is-align-self-center">
                <FontAwesomeIcon icon={faHome} className={styles.icon} />
              </span>
              <span className="is-unselectable mt-3">{cat.name}</span>
            </span>
          </div>
        </div>
      ));

      const blankTile = (key) => (
        <div className="column is-6 p-0" key={key}>
          <div className={`is-flex is-justify-content-center  is-align-items-center ${styles.tileHeight}`}>
            <span className="icon-text is-flex is-flex-direction-column is-align-items-center">
              <span className="icon is-align-self-center">
                <i className={`s ${styles.icon}`}>
                  {}
                </i>
              </span>
              <span className="is-unselectable mt-3">{}</span>
            </span>
          </div>
        </div>
      );

      while (updatedTiles.length < 6) {
        updatedTiles.push(blankTile(generateKey()));
      }

      setTiles(updatedTiles);
    }
  }, [categories, category]);

  return (
    <div className={`columns is-flex-wrap-wrap mt-1 px-0 has-text-white is-mobile ${styles.tileGrid}`}>
      {tiles}
    </div>
  );
}
