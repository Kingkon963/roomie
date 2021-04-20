import { useState } from 'react';

const SizeUnlockIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 334.686 148.975">
    <g id="Link" transform="translate(-616.935 -444.602)">
      <path id="Path_1" data-name="Path 1" d="M981.121,457.938v31.1S898,481.841,899.411,531.11c5.488,51.83,76.831,45.123,76.831,45.123l-.088,28.251S864.321,616.54,863.435,531.11C868.574,443.881,981.121,457.938,981.121,457.938Z" transform="translate(-246 -12)" fill="#005cf7" stroke="#707070" strokeWidth="1" />
      <path id="Path_3" data-name="Path 3" d="M863.435,457.938v31.1s83.125-7.195,81.709,42.074c-5.488,51.83-76.831,45.123-76.831,45.123l.088,28.251S980.235,616.54,981.121,531.11C975.982,443.881,863.435,457.938,863.435,457.938Z" transform="translate(-30 -12)" fill="#005cf7" stroke="#707070" strokeWidth="1" />
      <path id="Path_2" data-name="Path 2" d="M981.121,520.089v33.259h96.474V520.089Z" transform="translate(-245 -15)" fill="#005cf7" stroke="#707070" strokeWidth="1" />
    </g>
  </svg>
);

const SizeLockIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 254.686 148.975">
    <g id="Link" transform="translate(-656.935 -444.602)">
      <path id="Path_1" data-name="Path 1" d="M981.121,457.938v31.1S898,481.841,899.411,531.11c5.488,51.83,76.831,45.123,76.831,45.123l-.088,28.251S864.321,616.54,863.435,531.11C868.574,443.881,981.121,457.938,981.121,457.938Z" transform="translate(-206 -12)" fill="#005cf7" stroke="#707070" strokeWidth="1" />
      <path id="Path_3" data-name="Path 3" d="M863.435,457.938v31.1s83.125-7.195,81.709,42.074c-5.488,51.83-76.831,45.123-76.831,45.123l.088,28.251S980.235,616.54,981.121,531.11C975.982,443.881,863.435,457.938,863.435,457.938Z" transform="translate(-70 -12)" fill="#005cf7" stroke="#707070" strokeWidth="1" />
      <path id="Path_2" data-name="Path 2" d="M981.121,520.089v33.259h96.474V520.089Z" transform="translate(-245 -15)" fill="#005cf7" stroke="#707070" strokeWidth="1" />
    </g>
  </svg>

);

export default function PropertyPanel() {
  const [sizeLocked, setSizeLocked] = useState(false);
  return (
    <>
      <div className="box p-0 is-unselectable">
        <h1 className="is-size-7 column is-12">Properties</h1>

        <div className="columns is-mobile m-0 is-align-items-center bt-1">
          <div className="column is-2 has-text-left has-text-weight-bold">
            Size:
          </div>
          <div className="column is-4">
            <input type="text" className="input w-full m-0 p-0" />
            <p className="subtitle is-7 mt-1">Width</p>
          </div>
          <div
            className="column is-2 p-0 is-clickable"
            onClick={() => setSizeLocked(!sizeLocked)}
            role="button"
            tabIndex={0}
            onKeyPress={() => {}}
          >
            {/* <img src="images/sizeLockIcon.svg" alt="sizeLockIcon" /> */}
            {sizeLocked ? SizeLockIcon : SizeUnlockIcon}
          </div>
          <div className="column is-4">
            <input type="text" className="input w-full m-0 p-0" />
            <p className="subtitle is-7 mt-1">Height</p>
          </div>
        </div>

        <div className="columns is-mobile mx-0 mt-0 is-align-items-center bt-1">
          <div className="column is-4 has-text-left has-text-weight-bold">
            Transform:
          </div>
          <div className="column is-4">
            <input type="text" className="input w-full m-0 p-0" placeholder="0&deg;" />
            <p className="subtitle is-7 mt-1">Angle</p>
          </div>
          <div className="column is-4">
            <div className="level">
              <div className="level-item">
                <button className="button is-small" type="button">A</button>
              </div>
              <div className="level-item">
                <button className="button is-small" type="button">{'>'}</button>
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
          }
          .input:focus, .input:hover, .input:active {
            outline: none !important;
            border: none;
            border-bottom: 1px solid gray;
          }
          button{
            border: none;
            outline: none;
          }
          `}
      </style>
    </>
  );
}
