import { formatCurrency } from "../../utilities/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice, pizzaId } = item;
  const orderedItem = ingredients?.find((i) => i.id === pizzaId) ?? [];
  return (
    <li className="space-y-1 py-2">
      <div className="flex items-center justify-between">
        <p>
          <span className="font-bold">{quantity} &times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients
          ? "Loading..."
          : orderedItem?.ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;