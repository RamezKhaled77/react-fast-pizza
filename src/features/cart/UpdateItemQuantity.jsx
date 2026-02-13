import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decrementItemQuantity, incrementItemQuantity } from "./cartSlice";

// eslint-disable-next-line react/prop-types
function UpdateItemQuantity({ pizzaId, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={() => dispatch(decrementItemQuantity(pizzaId))}>
        -
      </Button>
      <span className="font-medium">{quantity}</span>
      <Button type="round" onClick={() => dispatch(incrementItemQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
