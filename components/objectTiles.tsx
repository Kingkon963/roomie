import { useEffect, useState } from 'react';
import Image from 'next/image';

// eslint-disable-next-line import/no-unresolved
import SubCategory from '../interfaces/SubCategory';
import styles from '../styles/objectTiles.module.scss';

export default function ObjectTiles({
  selected,
}: {
  selected: SubCategory,
}) {
  const [tiles, setTiles] = useState([]);
  const generateKey = () => `key-${Math.random()}-${Date.now()}`;
  useEffect(() => {
    if (selected) {
      const updatedTiles = selected.objects.map((obj) => (
        <div className={`tile is-child ${styles.isChild} box is-6 is-flex is-justify-content-center is-clickable`} key={generateKey()}>
          <Image src={obj.img} width="100" height="100" draggable={false} />
        </div>
      ));
      setTiles(updatedTiles);
    }
  }, [selected]);

  return (
    <div className={`tile is-ancestor ${styles.isAncestor}`}>
      <div className="tile is-parent is-flex-wrap-wrap">
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
