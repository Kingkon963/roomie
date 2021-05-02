import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

// eslint-disable-next-line import/no-unresolved
import SubCategory from '../interfaces/SubCategory';
// eslint-disable-next-line import/no-unresolved
import { CartContext } from '../context/CartContext';
import styles from '../styles/objectTiles.module.scss';

export default function ObjectTiles({
  selected,
}: {
  selected: SubCategory,
}) {
  const [tiles, setTiles] = useState([]);
  const [, , , addCartItem] = useContext(CartContext);

  const generateKey = () => `key-${Math.random()}-${Date.now()}`;

  useEffect(() => {
    if (selected) {
      const updatedTiles = selected.objects.map((obj) => (
        <div
          className={`tile is-child ${styles.isChild} box is-6 is-flex is-justify-content-center is-clickable`}
          key={generateKey()}
          onClick={() => addCartItem(obj)}
          role="button"
          onKeyPress={() => {}}
          tabIndex={0}
        >
          <Image src={obj.img} width="100" height="100" draggable={false} loading="eager" />
        </div>
      ));
      setTiles(updatedTiles);
    }
  }, [selected]);

  return (
    <div className={`tile is-ancestor ${styles.isAncestor}`}>
      <div className={`tile is-parent is-flex-wrap-wrap ${styles.isParent}`}>
        {(tiles.length > 0) ? tiles : (selected && `No ${selected.name} Found!`)}
      </div>

      <style jsx>
        {`
          ::-webkit-scrollbar {
              width: 0;  /* Remove scrollbar space */
              background: transparent;  /* Optional: just make scrollbar invisible */
          }  
        `}
      </style>
    </div>
  );
}
