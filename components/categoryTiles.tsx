import styles from '../styles/categoryTiles.module.scss';

export default function CategoryTiles({ categories } : { categories: {name : string}[] }) {
  const tiles = categories.map((cat: {id: number, name: string}) => (
    <div className="column is-6 p-0" key={cat.id}>
      <div className={`is-flex is-justify-content-center  is-align-items-center ${styles.tile}`}>
        <span className="icon-text is-flex is-flex-direction-column is-align-items-center">
          <span className="icon is-align-self-center">
            <i className={`fas fa-home ${styles.icon}`}>
              {}
            </i>
          </span>
          <span className="is-unselectable mt-3">{cat.name}</span>
        </span>
      </div>
    </div>
  ));

  const blankTile = (
    <div className="column is-6 p-0">
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

  while (tiles.length < 6) {
    tiles.push(blankTile);
  }

  return (
    <div className={`columns is-flex-wrap-wrap mt-1 px-0 has-text-white is-mobile ${styles.tileGrid}`}>
      {tiles}
    </div>
  );
}
