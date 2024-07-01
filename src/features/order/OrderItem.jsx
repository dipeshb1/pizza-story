import { formatCurrency } from "../../utilities/helpers";

function OrderItem({ item }) {
  console.log(item);
  const { quantity, name, totalPrice, addIngredients } = item;
  return (
    <li className="space-y-1 py-2">
      <div className="flex items-center justify-between">
        <p>
          <span className="font-bold">{quantity} &times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {addIngredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
