import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeitemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeitemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
