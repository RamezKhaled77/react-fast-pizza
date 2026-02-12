import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { updateName } from "./userSlice";

function CreateUser() {
  const [username, setUsername] = useState("");
  // We use this specifically for the animation trigger
  const [isShaking, setIsShaking] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    // 1. Validation check
    if (username.trim() === "") {
      setIsShaking(true);

      // 2. Reset the shaking state after animation finishes (matches Tailwind duration)
      setTimeout(() => {
        setIsShaking(false);
        setUsername("");
      }, 400);

      return; // Stop the function here
    }

    // 3. If valid, proceed with Redux and Navigation
    dispatch(updateName(username));

    setUsername("");
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        className={`input mb-8 w-72 transition-all duration-200 ${
          isShaking ? "!animate-error border-red-500" : "border-stone-200"
        }`}
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username && (
        <div>
          <Button type="primary">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
