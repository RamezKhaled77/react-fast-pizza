import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const formErrors = useActionData();
  const navigation = useNavigation();
  const isSubmitting =
    navigation.state === "submitting";

  // const [withPriority, setWithPriority] = useState(false);
  // NOTE - We don't need to use useActionData here, because we can navigate to the order page directly after creating the order in the action function. But if we wanted to stay on the same page and display a message or something, we could use useActionData to get the returned data from the action function.
  // const navigate = useNavigate();
  // const newOrder = useActionData();
  // if (newOrder) {
  //   console.log(newOrder.id);
  //   navigate(`/order/${newOrder.id}`);
  // }

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="customer"
            required
          />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input
              type="tel"
              name="phone"
              required
            />
            {formErrors?.phone && (
              <p style={{ color: "red" }}>
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <button
            disabled={isSubmitting}
            className={`inline-block rounded-full bg-yellow-400 px-4 py-3 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed`}
          >
            {isSubmitting
              ? "Placing order..."
              : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    priority: data.priority === "on", // The value of a checkbox is "on" when it's checked, and undefined when it's not. So we check if the value is "on" to set the priority to true or false.
    cart: JSON.parse(data.cart), // We need to parse the cart data, because it was stringified before being sent to the server.
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone =
      "Please enter a valid phone number";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // if there are no errors, we create the order
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`); // After creating the order, we redirect to the order page. The new order's id is available in the returned data from the createOrder function, which is returned from the action function, and can be accessed in the component via useActionData. But since we're redirecting to a different page, we don't need to use useActionData here, we can just use the new order's id directly in the redirect function.
}

export default CreateOrder;
