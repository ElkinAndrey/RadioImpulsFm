import { CategoryWithRadios } from "@/entities/category";
import React from "react";
import classes from "./CategoryEdit.module.css";
import { RadioWithLink } from "@/entities/radio";
import ChangeButton from "../ChangeButton";
import modeIcon from "@/assets/images/mode.svg";
import deleteIcon from "@/assets/images/delete.svg";
import addIcon from "@/assets/images/add.svg";
import { ColorImg } from "@/shared/ui";

const CategoryEdit = ({ category = null }) => {
  return (
    <CategoryWithRadios
      name={category?.name ?? ""}
      count={category?.radios?.length ?? null}
      adornment={
        <div>
          <ChangeButton src={addIcon} alt="Добавить радио в категорию" width="36px" />
          <ChangeButton src={modeIcon} alt="Изменить категорию" width="36px" />
          <ChangeButton src={deleteIcon} alt="Удалить категорию" width="36px" />
        </div>
      }
    >
      <ol className={classes.radios}>
        {(category?.radios ?? []).map((radio) => (
          <RadioWithLink key={radio.id} radio={radio}>
            <button>
              <ColorImg src={modeIcon} color="#ff0000"/>
            </button>
            <ChangeButton src={modeIcon} alt="Изменить" />
            <ChangeButton src={deleteIcon} alt="Удалить" />
          </RadioWithLink>
        ))}
      </ol>
    </CategoryWithRadios>
  );
};

export default CategoryEdit;
