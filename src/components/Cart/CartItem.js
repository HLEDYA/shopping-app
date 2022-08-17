import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  console.log(props.item);

  const dispatch = useDispatch();

  const { id, name, quantity, price, total } = props.item;

  const incQuantityHandler = () => {
    dispatch(
      cartActions.addItem({
        id,
        name,
        price,
        quantity: 1,
      })
    );
  };

  const decQuantityHandler = () => {
    dispatch(cartActions.removeItem(id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={incQuantityHandler}>+</button>
          <button onClick={decQuantityHandler}>-</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
