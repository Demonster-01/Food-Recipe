import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { userName } = location.state || {};
  return <div>This is {userName} Profile</div>;
}
