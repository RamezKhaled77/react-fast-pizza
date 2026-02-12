/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ onClick, children, disabled, to, type = "primary" }) {
  const base =
    "inline-block rounded-full bg-yellow-400  text-sm font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed  w-fit";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-3",
    small: base + " px-3 py-2 text-xs md:px-4 md:py-2.5",
    secondary:
      "inline-block rounded-full bg-stone-200 text-sm font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed  w-fit px-4 py-3 md:px-6 md:py-3",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
