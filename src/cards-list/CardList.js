import React from "react";

const CardList = ({ data, resourceName, itemComponent: ItemComponent }) => {
  return data.map((card) => <ItemComponent {...{ [resourceName]: card }} />);
};

export default CardList;
