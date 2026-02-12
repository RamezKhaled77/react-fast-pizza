import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

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
  const userName = useSelector((state) => state.user.username);

  const isSubmitting = navigation.state === "submitting";

  // const [withPriority, setWithPriority] = useState(false);
  // NOTE - We don't need to use useActionData here, because we can navigate to the order page directly after creating the order in the action function. But if we wanted to stay on the same page and display a message or something, we could use useActionData to get the returned data from the action function.
  // const navigate = useNavigate();
  // const newOrder = useActionData();
  // if (newOrder) {
  //   console.log(newOrder.id);
  //   navigate(`/order/${newOrder.id}`);
  // }

  const cart = fakeCart;

  const styles = {
    box: `mb-6 flex flex-col gap-2 sm:flex-row sm:items-center`,
    label: `sm:basis-40`,
  };

  return (
    <div className="my-8 px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className={styles.box}>
          <label className={styles.label} htmlFor="customer">
            First Name
          </label>
          <input
            className="input grow"
            type="text"
            defaultValue={userName ? userName : ""}
            name="customer"
            id="customer"
            required
          />
        </div>

        <div className={styles.box}>
          <label className={styles.label} htmlFor="phone">
            Phone number
          </label>
          <div className="grow">
            <input
              className="input w-full"
              type="tel"
              name="phone"
              id="phone"
              required
            />
            {formErrors?.phone && (
              <p className="mt-2 rounded-lg bg-red-100 px-3 py-1 text-xs text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className={styles.box}>
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              id="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-6">
          <input
            className="h-6 w-6 accent-yellow-400 focus:border-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
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
      "Please give us your phone number, so we can contact you about your order.";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  // if there are no errors, we create the order
  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`); // After creating the order, we redirect to the order page. The new order's id is available in the returned data from the createOrder function, which is returned from the action function, and can be accessed in the component via useActionData. But since we're redirecting to a different page, we don't need to use useActionData here, we can just use the new order's id directly in the redirect function.
}

export default CreateOrder;
