import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ManageDirectory from "../manage-directory/manage-directory";
import ManageCategory from "../manage-category/manage-category";
import { fetchCategoriesStart } from "../../store/categories/category-action";
import { fetchOrdersStart } from "../../store/order/order-action";

import AdminNavigation from "../../components/admin-navigation/admin-navigation";

import "./admin.css";
import Orders from "../orders/order";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
    dispatch(fetchOrdersStart());
  }, []);

  return (
    <div className="admin-container">
      <AdminNavigation />
      <div className="admin-child">
        <Routes>
          <Route index element={<ManageDirectory />} />
          <Route path="orders/*" element={<Orders />} />
          <Route path=":category" element={<ManageCategory />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
