import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="Profile">profile</Link>
        </li>
        <li>
          <Link to="Seetings">Seetings</Link>
        </li>
      </ul>
      This is dashboard
      <Outlet />
    </div>
  );
}
