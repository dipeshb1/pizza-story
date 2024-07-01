import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUsername } from "../user/userSlice";
import { useFetcher } from "react-router-dom";
import { useEffect } from "react";

function Cart() {
  const fetcher = useFetcher();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mb-2 mt-4 text-xl font-semibold sm:mb-4 sm:mt-7">
        Your cart, {username}
      </h2>

      <ul className="divide-y divide-stone-200 border-b border-stone-200">
        {cart.map((item) => (
          <CartItem
            item={item}
            key={item.pizzaId}
            isLoading={fetcher.state === "loading"}
            ingredients={fetcher?.data}
          />
        ))}
      </ul>
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Empty cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
