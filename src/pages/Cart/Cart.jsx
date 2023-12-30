import { useEffect } from "react";
import CartItem from "../../components/CartItem";
import { remove, getTotalPrice } from "../../store/cart/cartSlice";

import { useSelector, useDispatch } from "react-redux";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart, totalPrice } = useSelector((state) => state.cart);
  useEffect(() => {
    if (cart.length != 0) {
      calculateTotalPrice();
    }
  }, []);
  const removeFromCart = (product) => {
    dispatch(remove(product));
  };

  const calculateTotalPrice = () => {
    dispatch(getTotalPrice());
  };
  const mapCart = cart.map((item) => (
    <CartItem
      item={item}
      key={item.id}
      removeFromCart={() => removeFromCart(item)}
    />
  ));
  return (
    <div className="share-route-parent">
      <div className="text-3xl font-semibold">Cart</div>
      {cart.length != 0 ? (
        <>
          <div className="mt-4">
            <p className="text-2xl text-blue-700 font-semibold">
              Total Price : ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 mt-6">{mapCart}</div>
        </>
      ) : (
        <div
          className="p-4 mt-16  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert">
          <span className="font-medium">Sorry ! , No Producyts In Cart</span>
        </div>
      )}
    </div>
  );
};

export default Cart;
