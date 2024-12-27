import React, { useState } from "react";
import classes from "./WorkingRadio.module.css";
import { If } from "@/shared/ui";
import playIcon from "@/assets/images/play.png";
import pauseIcon from "@/assets/images/pause.png";

const WorkingRadio = ({ radio = null }) => {
  const [isPlay, setIsPlay] = useState(false);

  const changePlay = () => setIsPlay((state) => !state);

  return (
    <div className={classes.root}>
      <If value={radio}>
        <div className={classes.buttonBox}>
          <button onClick={changePlay} className={classes.button}>
            <img
              src={isPlay ? playIcon : pauseIcon}
              alt={isPlay ? "Игра" : "Пауза"}
              className={classes.image}
            />
          </button>
        </div>
      </If>
      <span className={classes.category}>
        {`Вещает: ${radio?.category?.name ? `${radio?.category?.name},` : "-"}`}
      </span>
      <If value={radio}>
        <span className={classes.name}>{radio?.name ?? ""}</span>
        <span className={classes.song}>Какая-то песня</span>
      </If>
    </div>
  );
};

export default WorkingRadio;
