/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getIsItemInCart } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const isInCart = useSelector(getIsItemInCart(id));

  return (
    <li className="flex w-full gap-6 px-2 py-4 sm:px-0">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex w-full flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className={`mt-4 flex items-center justify-between font-medium`}>
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm uppercase text-stone-500">Sold out</p>
          )}
          <Button
            disabled={soldOut}
            type="small"
            onClick={() =>
              dispatch(
                addItem({
                  pizzaId: id,
                  name,
                  unitPrice,
                  quantity: 1,
                  totalPrice: unitPrice,
                }),
              )
            }
          >
            {isInCart ? "Add more +" : "Add to cart"}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
