import { CategoriesApi } from "@/entities/category";
import { useFetching } from "@/shared/hooks";
import { useState } from "react";

function useCategories() {
  const [categories, setCategories] = useState([]);
  const callbackCategories = async () => {
    const res = await CategoriesApi.get();
    setCategories(res.data ?? []);
  };

  const [fetchCategories, loadCategories, errorCategories] = useFetching(callbackCategories, true);

  return { fetchCategories, loadCategories, errorCategories, categories, setCategories };
}

export default useCategories;
