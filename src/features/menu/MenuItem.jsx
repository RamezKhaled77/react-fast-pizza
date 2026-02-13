/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import {
  addItem,
  getCurrentQuantityById,
  getIsItemInCart,
  removeItem,
} from "../cart/cartSlice";
import { toast } from "sonner";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const isInCart = useSelector(getIsItemInCart(id));
  const currentQuantity = useSelector(getCurrentQuantityById(id));

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    if (isInCart) {
      toast("➕ Incremented item quantity!");
    } else {
      toast("✔ Item added to cart successfully!");
    }
  }

  function handleRemoveFromCart() {
    dispatch(removeItem(id));
    toast("❌ Item removed from cart successfully!");
  }

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
          {!soldOut && (
            <div className="flex items-center gap-3">
              {/* NOTE - Option 1 */}
              {isInCart ? (
                <div className="flex items-center gap-3">
                  <UpdateItemQuantity pizzaId={id} quantity={currentQuantity} />
                  <Button type="removeSmall" onClick={handleRemoveFromCart}>
                    Remove
                  </Button>
                </div>
              ) : (
                <Button type={"small"} onClick={handleAddToCart}>
                  Add to cart
                </Button>
              )}

              {/* NOTE - Option 2 */}
              {/* <Button
                type={isInCart ? "secondarySmall" : "small"}
                onClick={handleAddToCart}
              >
                {isInCart ? "Add more +" : "Add to cart"}
              </Button> */}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
