import {
  Outlet,
  useNavigation,
} from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation(); // For showing a loading state when navigating between routes. The useNavigation hook returns an object with information about the current navigation state, including whether a navigation is in progress (state === "loading").
  const isLoading =
    navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="overflow-y-scroll">
        <main className="mx-auto max-w-3xl">
          {isLoading ? <Loader /> : <Outlet />}
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
