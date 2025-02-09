import React from "react";
import classes from "./Categories.module.css";
import { Category } from "@/entities/category";
import { EmptyError } from "@/shared/ui";

const Categories = ({ categories = [], setCategory = (category) => category }) => {
  const set = (category) => () => setCategory(category);

  if (categories.length === 0)
    return <EmptyError color="#ffffff">Список категорий пуст</EmptyError>;

  return (
    <ol className={classes.root}>
      {categories.map((category) => (
        <Category key={category.id} name={category.name} onClick={set(category)} />
      ))}
    </ol>
  );
};

export default Categories;
