export default function CartButton() {
  return (
    <>
      <button className="is-clickable" type="button">
        <span>2</span>
        <i className="fas fa-shopping-bag" />
      </button>
      <style jsx>
        {`
            button{
                background: transparent;
                border: 1px solid #78767e;
                border-radius: 50%;
                width: 32px;
                height: 32px;
                color: white;
                position: relative;
            }
            span{
                position: absolute;
                left: -10px;
                border: none;
                border-radius: 50%;
                width: 16px;
                height: 16px;
                padding: .4em;
                font-size: .6rem;
                background-color: #2C83F9;
            }
            i{
                color: white;
            }
            button:hover {
                background: black;
                border-color: black;
            }
        `}
      </style>
    </>
  );
}
