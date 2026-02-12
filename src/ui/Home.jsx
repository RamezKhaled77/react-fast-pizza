import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import LinkButton from "./LinkButton";

function Home() {
  const userName = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 px-3 text-xl font-bold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {userName ? (
        <div className="">
          <p className="mb-3 text-lg">
            Hello there,{" "}
            <strong className="uppercase tracking-wide">{userName}</strong>!
          </p>
          <LinkButton to="/menu">Go to the menu &rarr;</LinkButton>
        </div>
      ) : (
        <CreateUser />
      )}
    </div>
  );
}

export default Home;
