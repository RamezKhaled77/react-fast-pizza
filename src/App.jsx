import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, // That is how we load data for a route. The loader function will be called when the route is matched, and the returned data will be available in the component via useLoaderData.
        errorElement: <Error />, // For Fetching data errors
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader, // We can also pass params to the loader, which is useful for dynamic routes like this one. The params will be available in the loader function as an argument.
        errorElement: <Error />, // For Fetching data errors
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
