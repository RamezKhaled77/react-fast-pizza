import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-8 space-y-8 px-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="text-center font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
