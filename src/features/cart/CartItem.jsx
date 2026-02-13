import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { removeItem } from "./cartSlice";
import UpdateItemQuantity from "./UpdateItemQuantity";

// eslint-disable-next-line react/prop-types
function CartItem({ item }) {
  const dispatch = useDispatch();
  // eslint-disable-next-line react/prop-types
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>

        <UpdateItemQuantity pizzaId={pizzaId} quantity={quantity} />
        <Button type="removeSmall" onClick={() => dispatch(removeItem(pizzaId))}>
          Remove
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
