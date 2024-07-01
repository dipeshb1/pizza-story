import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalCartitems, totalPrice } from "./cartSlice";

function CartOverview() {
  const totalQuantity = useSelector(totalCartitems);
  const totalValue = useSelector(totalPrice);
  if (totalQuantity <= 0) return;
  return (
    <div className="mx-auto flex w-full max-w-3xl animate-slideFront items-center justify-between bg-blue-950 px-4 py-4 text-sm uppercase text-stone-200 sm:rounded-sm sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQuantity} pizzas</span>
        <span>₹{totalValue}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
