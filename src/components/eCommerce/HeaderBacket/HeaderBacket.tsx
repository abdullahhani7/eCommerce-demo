import Logo from "@assets/svg/cart.svg?react";

import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";
const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = Object.values(cartItems).reduce(
    (acc, current) => acc + current,
    0
  );

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
