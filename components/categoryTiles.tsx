import styles from '../styles/categoryTiles.module.scss';

export default function CategoryTiles({ categories } : { categories: {name : string}[] }) {
  const tiles = categories.map((cat: {id: number, name: string}) => (
    <div className="column is-6 p-0" key={cat.id}>
      <div className={`block ${styles.tile}`}>
        <span className="icon-text is-flex is-flex-direction-column">
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

  return (
    <div className={`columns is-flex-wrap-wrap mt-2 px-0 has-text-white is-mobile ${styles.tileGrid}`}>
      {tiles}
    </div>
  );
}
