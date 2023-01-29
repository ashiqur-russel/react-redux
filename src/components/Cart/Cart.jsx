import React from "react";

const Cart = () => {
  const cart = [];
  return (
    <div className="shopping-cart">
      <div className="title">Shopping Bag</div>

      {cart.map((item, _idx) => (
        <div className="item" key={_idx}>
          <div className="buttons">
            <span className="delete-btn"></span>
            <span className="like-btn"></span>
          </div>

          <div className="image">
            <img src={item.image} alt="" />
          </div>

          <div className="description">
            <span>{item.model}</span>
          </div>

          <div className="quantity">
            <button className="plus-btn" type="button" name="button">
              +
            </button>
            <button style={{ border: "none", width: "20px" }}>1</button>
            <button className="minus-btn" type="button" name="button">
              -{" "}
            </button>
          </div>

          <div className="total-price">{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
