import { Radio } from "@/entities/radio";
import React from "react";
import classes from "./Radios.module.css";

const Radios = ({ radios, setRadio = (radio) => radio }) => {
  const set = (radio) => () => setRadio(radio);

  return (
    <ol className={classes.root}>
      {(radios ?? []).map((radio, index) => (
        <Radio
          key={radio.id}
          name={radio.name}
          hasBorder={index + 1 !== (radios?.length ?? 0)}
          onClick={set(radio)}
        />
      ))}
    </ol>
  );
};

export default Radios;
