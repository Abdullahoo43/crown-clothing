import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ManageDirectory from "../manage-directory/manage-directory";
import ManageCategory from "../manage-category/manage-category";
import { fetchCategoriesStart } from "../../store/categories/category-action";
import { fetchOrdersStart } from "../../store/order/order-action";
import ManageOrders from "../manage-orders/manage-orders";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
    dispatch(fetchOrdersStart());
  }, []);

  return (
    <Routes>
      <Route index element={<ManageDirectory />} />
      <Route path="/orders" element={<ManageOrders />} />
      <Route path=":category" element={<ManageCategory />} />
    </Routes>
  );
};

export default Admin;
