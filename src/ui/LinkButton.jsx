import {
  Link,
  useNavigate,
} from "react-router-dom";

// eslint-disable-next-line react/prop-types
function LinkButton({ children, to }) {
  const navigate = useNavigate(); // For navigating back to the previous page

  const className =
    "text-base font-medium text-indigo-500 hover:text-indigo-700 hover:underline";

  if (to === "-1") {
    return (
      <button
        onClick={() => navigate(-1)}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
