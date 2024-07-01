import { formatCurrency } from "../../utilities/helpers";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";
import DeleteButton from "./DeleteButton";
import UpdateItemQuantity from "./UpdateItemQuantity";
import UpdateIngredients from "./UpdateIngredients";

function CartItem({ item, ingredients, isLoading }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const cartItem = ingredients?.find((i) => i.id === pizzaId) ?? [];

  return (
    <li className="py-3 sm:flex sm:flex-col sm:items-start sm:justify-between">
      <div className="w-full py-3 sm:flex sm:items-center sm:justify-between">
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>

          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteButton pizzaId={pizzaId} />
        </div>
      </div>
      {isLoading ? (
        "Loading..."
      ) : (
        <UpdateIngredients pizzaId={pizzaId} ingredients={cartItem} />
      )}
    </li>
  );
}

export default CartItem;
