import Image from 'next/image';

export default function ObjectPanel() {
  return (
    <>
      <div className="box bottom-box p-0 ">
        <h1 className="is-size-7 column is-12">Objects</h1>
        <div className="column is-12 bt-1 pt-5">
          <div className="select is-small">
            <h1 className="has-text-left is-size-7">Choose a category</h1>
            <select className="has-text-weight-bold">
              <option>Office Chairs</option>
              <option>B</option>
            </select>
          </div>
        </div>

        <div className="column is-12">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-flex-wrap-wrap">
              <div className="tile is-child box is-6 is-flex is-justify-content-center is-clickable">
                <Image src="/images/chair1.jpg" width="100" height="100" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .bt-1{
            border-top: 1px solid #78767e;
          }
          .box {
              background-color: #F8F8F8;
          }
          .bottom-box {
            min-height: 54vh;
            margin-top: 2.5em;
          }
          .select, select {
            min-width: 100%;
            border-bottom: 1px solid gray;
          }
          .select {
            position: relative;
          }
          .select > h1{
            position: absolute;
            z-index: 1;
            top:-17px;
            left: 8px;
            color: gray;
          }
          .is-ancestor{
            overflow-y: scroll;
            max-height: 30vh;
          }
          ::-webkit-scrollbar {
              width: 0;  /* Remove scrollbar space */
              background: transparent;  /* Optional: just make scrollbar invisible */
          }
        `}
      </style>
    </>
  );
}
