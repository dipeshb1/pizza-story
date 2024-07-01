import { useDispatch, useSelector } from "react-redux";
import { customizeItem } from "./cartSlice";

function UpdateIngredients({ pizzaId, ingredients }) {
  const dispatch = useDispatch();
  const pizza = useSelector((state) =>
    state.cart.cart.find((item) => item.pizzaId === pizzaId),
  );

  // Initialize directly from props or Redux state
  const initialRemoveIngredients = pizza ? pizza.removeIngredients : [];
  const initialAddIngredients = pizza ? pizza.addIngredients : ingredients;

  function handleClick(item) {
    const updatedAddIngredients = initialAddIngredients.filter(
      (i) => i !== item,
    );
    const updatedRemoveIngredients = [...initialRemoveIngredients, item];

    dispatch(
      customizeItem({
        pizzaId,
        removeIngredients: updatedRemoveIngredients,
        addIngredients: updatedAddIngredients,
      }),
    );
  }

  return (
    <div className="flex flex-wrap gap-2">
      {initialAddIngredients.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className="rounded-xl bg-green-200 px-2 text-sm capitalize text-green-700"
        >
          {item}
          <span className="ml-2 text-xs text-red-300">❌</span>
        </button>
      ))}
      {initialRemoveIngredients.map((item) => (
        <button
          key={item}
          className="rounded-xl bg-red-200 px-2 text-sm capitalize text-red-700"
        >
          {item}
          <span className="ml-2 text-sm text-red-300">➕</span>
        </button>
      ))}
    </div>
  );
}

export default UpdateIngredients;
