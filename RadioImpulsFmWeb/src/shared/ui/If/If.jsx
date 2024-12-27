import React from "react";

const If = ({ value = true, children = null }) => {
  if (value) return children;
  return <></>;
};

export default If;
