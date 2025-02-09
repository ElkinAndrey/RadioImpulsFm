import React from "react";
import classes from "./AdminPage.module.css";
import { CategoriesEdit } from "@/widgets/category";

const AdminPage = () => {
  return (
    <div className={classes.root}>
      <CategoriesEdit />
    </div>
  );
};

export default AdminPage;
