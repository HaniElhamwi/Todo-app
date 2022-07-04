import React from "react";
import { useSelector } from "react-redux";

const TotalCompleteItems = () => {
  const selector = useSelector((state) => {
    return state.todos;
  });

  let completedItems = 0;
  for (let item in selector.arr) {
    if (selector.arr[item].completed) {
      completedItems++;
    }
  }

  return <h4 className="mt-3">compelted items : {completedItems}</h4>;
};

export default TotalCompleteItems;
