import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate(); // For navigating back to the previous page
  const error = useRouteError(); // For accessing the error information
  console.error(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
