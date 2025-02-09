import React, { useEffect, useState } from "react";
import { ErrorApi, Loader, Logo } from "@/shared/ui";
import { Categories } from "@/widgets/category";
import { Radios, WorkingRadio } from "@/widgets/radio";
import { useCategories } from "@/entities/category";

const Content = ({ selectCategory = null, setSelectCategory = (category) => category }) => {
  const [selectRadio, setSelectRadio] = useState(null);

  const setRadio = (radio) => {
    setSelectRadio({ ...radio, category: selectCategory });
    setSelectCategory(null);
  };

  const { fetchCategories, loadCategories, errorCategories, categories } = useCategories();

  useEffect(() => {
    fetchCategories();
  }, []);

  if (loadCategories) return <Loader color="#ffffff" width="40px" thickness="4px" />;
  if (errorCategories) return <ErrorApi>Не удалось загрузить категории</ErrorApi>;
  if (selectCategory) return <Radios radios={selectCategory?.radios ?? []} setRadio={setRadio} />;

  return (
    <React.Fragment>
      <Logo />
      <WorkingRadio radio={selectRadio} />
      <Categories categories={categories ?? []} setCategory={setSelectCategory} />
    </React.Fragment>
  );
};

export default Content;
