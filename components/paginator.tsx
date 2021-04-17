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

  return (
    <div className="block">
      <div className="level is-mobile">
        <div className="level-item has-text-white">
          <button
            onClick={() => goPrevPage()}
            type="button"
            className="is-clickable"
          >
            <span className="icon is-small">
              <i className="fas fa-chevron-left" />
            </span>
          </button>
        </div>
        <div className="level-item has-text-white">
          {Array(totalPage).fill(<>o</>)
            .map((_e, idx) => ((idx + 1) === currentPage ? <i className="fas fa-circle mr-1" />
              : <i className="far fa-circle mr-1" />))}
        </div>
        <div className="level-item has-text-white">
          <button
            onClick={() => goNextPage()}
            type="button"
            className="is-clickable"
          >
            <span className="icon is-small">
              <i className="fas fa-chevron-right" />
            </span>
          </button>
        </div>
      </div>

      <style jsx>
        {`
            .fa-circle{
                font-size: .5em;
            }
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
