import { Header } from "@/shared/ui";
import React, { useState } from "react";
import classes from "./MainPage.module.css";
import Content from "../Content";
import Back from "../Back";

const MainPage = () => {
  const [selectCategory, setSelectCategory] = useState(null);
  const back = () => setSelectCategory(null);

  return (
    <Header
      title={selectCategory?.name ?? "Импульс FM"}
      startAdornment={selectCategory ? <Back onClick={back} /> : null}
    >
      <div className={classes.root}>
        <Content selectCategory={selectCategory} setSelectCategory={setSelectCategory} />
      </div>
    </Header>
  );
};

export default MainPage;
