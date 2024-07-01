import { useDispatch, useSelector } from "react-redux";
import { customizeItem } from "./cartSlice";
import Button from "../../UI/Button";

function UpdateIngredients({ pizzaId, ingredients }) {
  const dispatch = useDispatch();
  const pizza = useSelector((state) =>
    state.cart.cart.find((item) => item.pizzaId === pizzaId),
  );

  // Initialize directly from props or Redux state
  const initialRemoveIngredients = pizza ? pizza.removeIngredients : [];
  const initialAddIngredients = pizza ? pizza.addIngredients : ingredients;

  function handleClick(item) {
    const updatedAddIngredients = initialAddIngredients.includes(item)
      ? initialAddIngredients.filter((i) => i !== item)
      : [...initialAddIngredients, item];
    const updatedRemoveIngredients = initialRemoveIngredients.includes(item)
      ? initialRemoveIngredients.filter((i) => i !== item)
      : [...initialRemoveIngredients, item];

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
        <Button key={item} onClick={() => handleClick(item)} type="green">
          {item}
          <span className="ml-2 text-xs text-red-300">❌</span>
        </Button>
      ))}
      {initialRemoveIngredients.map((item) => (
        <Button key={item} onClick={() => handleClick(item)} type="red">
          {item}
          <span className="ml-2 text-sm text-red-300">➕</span>
        </Button>
      ))}
    </div>
  );
}

export default UpdateIngredients;
