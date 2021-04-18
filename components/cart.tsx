export default function Cart() {
  return (
    <>
      <div className="cart p-3">
        <h1 className="title is-size-5">Your Bag</h1>
        <h1 className="subtitle is-size-7">2 Items</h1>
      </div>

      <style jsx>
        {`
          .cart{
            color: black;
            background-color: #FFFFFF;
          }
        `}
      </style>
    </>
  );
}
