import { useContext, useState } from 'react';

// eslint-disable-next-line import/no-unresolved
import { CategoryContext } from '../context/CategoryContext';
// eslint-disable-next-line import/no-unresolved
import Category from '../interfaces/Category';
// eslint-disable-next-line import/no-unresolved
import Dropdown from './dropdown';
// eslint-disable-next-line import/no-unresolved
import ObjectTiles from './objectTiles';

export default function ObjectPanel() {
  const [category]: [Category] = useContext(CategoryContext);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="box bottom-box p-0 is-unselectable">
        <h1 className="is-size-7 column is-12">Objects</h1>
        <span className="column is-12 m-0 p-0 has-text-left is-size-7 pl-4 pt-4 bt-1">
          Choose a Category
        </span>
        <div className="column is-12 m-0 p-0 ">
          <Dropdown
            category={category}
            selected={selected}
            setSelected={setSelected}
          />
        </div>

        <div className="column is-12">
          <ObjectTiles selected={selected} />
        </div>
      </div>

      <style jsx>
        {`
          .bt-1{
            border-top: 1px solid #78767e;
          }
          .bottom-box {
            min-height: 54vh;
            margin-top: 2.5em;
            background-color: #F8F8F8;
          }
        `}
      </style>
    </>
  );
}
