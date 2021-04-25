import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle } from '@fortawesome/free-regular-svg-icons';

export default function Paginator(
  {
    totalPage,
    currentPage,
    setCurrentPage,
  }:
    {
        totalPage: number,
        currentPage: number,
        setCurrentPage: any,
    },
) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (totalPage > 1) setVisible(true);
    else setVisible(false);
  }, [totalPage]);

  const goNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const goPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPage);
    }
  };

  const generateKey = () => Date.now();

  return (
    <div className={`block ${visible ? '' : 'is-invisible'}`}>
      <div className="level is-mobile">
        <div className="level-item has-text-white">
          <button
            onClick={() => goPrevPage()}
            type="button"
            className="is-clickable"
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          </button>
        </div>
        <div className="level-item has-text-white">
          {Array(totalPage).fill(<>o</>)
            .map((_e, idx) => ((idx + 1) === currentPage ? <FontAwesomeIcon icon={faCircle} className="mr-1" style={{ fontSize: '.5em' }} key={`fas${generateKey()}`} />
              : <FontAwesomeIcon icon={farCircle} className="mr-1" style={{ fontSize: '.5em' }} key={`far${generateKey()}`} />))}
        </div>
        <div className="level-item has-text-white">
          <button
            onClick={() => goNextPage()}
            type="button"
            className="is-clickable"
          >
            <span className="icon is-small">
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </div>
      </div>

      <style jsx>
        {`
            button{
                background: transparent;
                border: none;
                outline: none;
                color: lightgray;
            }
            button:hover {
                color: white;
            }
            button:focus {
                outline: none !important;
            }
        `}
      </style>
    </div>
  );
}
