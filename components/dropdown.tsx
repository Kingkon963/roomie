import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import Category from '../interfaces/Category';
// eslint-disable-next-line import/no-unresolved
import SubCategory from '../interfaces/SubCategory';

export default function Dropdown({
  category,
  selected,
  setSelected,
}: {
  category: Category,
  selected: SubCategory,
  setSelected: any,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);

  const generateKey = () => `key-${Math.random()}-${Date.now()}`;

  useEffect(() => {
    if (category) {
      const updatedItems = category.subCategories.map((cat, index) => {
        if (index === 0) setSelected(cat);
        return (
          <span
            className="dropdown-item is-clickable has-text-left is-size-7"
            onClick={() => {
              setSelected(cat);
              setIsOpen(false);
            }}
            onKeyPress={() => {}}
            role="button"
            tabIndex={0}
            key={generateKey()}
          >
            {cat.name}
          </span>
        );
      });
      setItems(updatedItems);
    }
  }, [category]);

  return (
    <div className={`dropdown ${isOpen ? 'is-active' : ''} w-full`}>
      <div className="dropdown-trigger w-full">
        <button
          className="button w-full is-justify-content-start is-size-6"
          type="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected ? selected.name : '---'}
        </button>
      </div>
      <div className="dropdown-menu w-full" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          { (items.length > 0) ? items : 'Please Select a Room type First' }
        </div>
      </div>

      <style jsx>
        {`
          .w-full{
            width: 100%;
          }
          button{
              border: none;
              border-bottom: 1px solid gray;
              outline: none !important;
          }
          button:active{
              outline: none !important;
          }
        `}
      </style>
    </div>
  );
}
