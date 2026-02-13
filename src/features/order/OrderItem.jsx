/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(ingredients);

  return (
    <li className="space-y-2 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>

        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      {!isLoadingIngredients && ingredients.length !== 0 && (
        <p className="mt-1 text-xs capitalize italic text-stone-400">
          {isLoadingIngredients
            ? "Ingredients Loading..."
            : ingredients.join(", ")}
        </p>
      )}
    </li>
  );
}

export default OrderItem;
