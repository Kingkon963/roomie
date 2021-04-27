import { useState, useContext } from 'react';

// eslint-disable-next-line import/no-unresolved
import { PropertyContext } from '../context/PropertyContext';

export default function PropertyPanel() {
  const [sizeLocked, setSizeLocked] = useState(false);
  const [property, setProperty] = useContext(PropertyContext);

  const onChangeHandler = (event) => {
    if (event.target.name === 'width') {
      setProperty(
        {
          ...property,
          size: {
            ...property.size,
            width: event.target.value,
          },
        },
      );
    }

    if (event.target.name === 'height') {
      setProperty(
        {
          ...property,
          size: {
            ...property.size,
            height: event.target.value,
          },
        },
      );
    }

    if (event.target.name === 'angle') {
      setProperty(
        {
          ...property,
          transform: {
            ...property.transform,
            angle: event.target.value,
          },
        },
      );
    }
  };

  return (
    <>
      <div className="box p-0 is-unselectable">
        <h1 className="is-size-7 column is-12">Properties</h1>

        <div className="columns is-mobile m-0 is-align-items-center bt-1">
          <div className="column is-2 has-text-left has-text-weight-bold">
            Size:
          </div>
          <div className="column is-4">
            <input
              type="number"
              className="input w-full m-0 p-0"
              name="width"
              value={property.size.width}
              onChange={(e) => onChangeHandler(e)}
            />
            <p className="subtitle is-7 mt-1">Width</p>
          </div>
          <div
            className="column is-2 p-0 is-clickable"
            onClick={() => setSizeLocked(!sizeLocked)}
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
          >
            {sizeLocked
              ? <img src="images/sizeLockIcon.svg" alt="sizeLockIcon" />
              : <img src="images/sizeUnLockIcon.svg" alt="sizeUnLockIcon" />}
          </div>
          <div className="column is-4">
            <input
              type="number"
              className="input w-full m-0 p-0"
              name="height"
              value={property.size.height}
              onChange={(e) => onChangeHandler(e)}
            />
            <p className="subtitle is-7 mt-1">Height</p>
          </div>
        </div>

        <div className="columns is-mobile mx-0 mt-0 is-align-items-center bt-1">
          <div className="column is-4 has-text-left has-text-weight-bold">
            Transform:
          </div>
          <div className="column is-4">
            <div className="deg is-flex">
              <input
                type="number"
                className="input w-full m-0 p-0"
                name="angle"
                value={property.transform.angle}
                placeholder="0&deg;"
                onChange={(e) => onChangeHandler(e)}
              />
            </div>
            <p className="subtitle is-7 mt-1">Angle</p>
          </div>
          <div className="column is-4">
            <div className="level">
              <div className="level-item">
                <button className="button is-small p-0" type="button">
                  <img src="images/mirror.svg" alt="" width="20px" />
                </button>
              </div>
              <div className="level-item">
                <button className="button is-small p-0" type="button">
                  <img src="images/mirrorRotated.svg" alt="" width="20px" />
                </button>
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
          .input {
            background: transparent;
            border-bottom: 1px solid #78767e;
            outline: none;
            text-align: center;
            height: 1.4rem;
            appearance: none;
            font-weight: bold;
          }
          .input:focus, .input:hover, .input:active {
            outline: none !important;
            border: none;
            border-bottom: 1px solid gray;
          }
          input::-webkit-outer-spin-button, 
          input::-webkit-inner-spin-button{ 
            margin-left: -.7rem; 
          } 
          {/* .deg{
            display: inline-block;
            position: relative;
          }
          .deg::after {
            position: absolute;
            top: -4px;
            right: 45%;
            transition: all .05s ease-in-out;
            content: "°";
            font-size: 1.3em;
          }
          .deg:hover::after,
          .deg:focus-within::after {
            top: -.4em;
          } */}
          button{
            border: none;
            outline: none;
            background: transparent;
          }
          `}
      </style>
    </>
  );
}
