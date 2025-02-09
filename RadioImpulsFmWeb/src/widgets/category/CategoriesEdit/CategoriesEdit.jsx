import { useCategories } from "@/entities/category";
import { CategoryEdit } from "@/features/category";
import React, { useEffect } from "react";
import classes from "./CategoriesEdit.module.css";
import { EmptyError, ErrorApi, Loader } from "@/shared/ui";

const CategoriesEdit = () => {
  const { fetchCategories, loadCategories, errorCategories, categories } = useCategories();

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loadCategories) return <Loader width="40px" thickness="4px" className={classes.loader} />;
  if (errorCategories) return <ErrorApi>Не удалось загрузить категории</ErrorApi>;
  if (categories?.length === 0) return <EmptyError>Список категорий пуст</EmptyError>;

  return (
    <ol className={classes.root}>
      {categories.map((category) => (
        <CategoryEdit key={category.id} category={category} />
      ))}
    </ol>
  );
};

export default CategoriesEdit;
