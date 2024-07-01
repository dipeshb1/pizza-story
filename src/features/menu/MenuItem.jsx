import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteButton from "../cart/DeleteButton";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const {
    id: pizzaId,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  const inCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      name,
      quantity: 1,
      pizzaId,
      unitPrice,
      totalPrice: unitPrice * 1,
      addIngredients: ingredients,
      removeIngredients: [],
    };
    dispatch(addItem(newItem));
  }
  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 animate-menuLoad rounded-md ${soldOut ? "opacity-50 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase">Sold out</p>
          )}
          {inCart && (
            <div className="flex items-center gap-2 sm:gap-8">
              <UpdateItemQuantity
                pizzaId={pizzaId}
                currentQuantity={currentQuantity}
              />
              <DeleteButton pizzaId={pizzaId} />
            </div>
          )}
          {!soldOut && !inCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
