import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { decrementItem, incrementItem } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decrementItem(pizzaId))}>
        -
      </Button>
      <p className="text-sm font-medium">{currentQuantity}</p>
      <Button type="round" onClick={() => dispatch(incrementItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
