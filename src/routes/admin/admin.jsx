import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ManageDirectory from "../manage-directory/manage-directory";
import ManageCategory from "../manage-category/manage-category";
import { fetchCategoriesStart } from "../../store/categories/category-action";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<ManageDirectory />} />
      <Route path=":category" element={<ManageCategory />} />
    </Routes>
  );
};

export default Admin;
