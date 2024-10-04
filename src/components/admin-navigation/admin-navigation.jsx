import { Link } from "react-router-dom";
import "./admin-navigation.css";

const AdminNavigation = () => {
  return (
    <div className="admin-navigation">
      <h1>Navigation</h1>
      <ul className="admin-pages">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"orders"}>Orders</Link>
        </li>
        <li>
          <Link to={"/admin"}>Inventory</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavigation;
