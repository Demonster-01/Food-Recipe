import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/DashBoard/Profile", { state: { userName } });
  }
  return (
    <div>
      This is Home<br></br>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleClick}>Profile</button>
    </div>
  );
}
