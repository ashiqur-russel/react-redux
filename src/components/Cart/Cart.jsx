import React from "react";
import { IconContext } from "react-icons";

import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../../redux/actionCreators/productAction";
import { BsTrash } from "react-icons/bs";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(cart);
  console.log();
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
            <button style={{ border: "none", width: "20px" }}>
              {item.quantity}
            </button>
            <button className="minus-btn" type="button" name="button">
              -{" "}
            </button>
            <button style={{ border: "none", width: "30px", height: "40px" }}>
              <BsTrash
                style={{ border: "none", color: "red" }}
                size={"1.5em"}
                onClick={() => dispatch(removeItemFromCart(item))}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
