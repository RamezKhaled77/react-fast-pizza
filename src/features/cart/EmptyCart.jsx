import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="mt-8 space-y-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="text-center">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
