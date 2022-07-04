import React from "react";
import { toggleComplete } from "../redux/todoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DeletHandler } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state;
  });
  console.log(selector);

  const isChecked = () => {
    console.log("isChecking");
    dispatch(
      toggleComplete({
        id,
        completed: !completed,
        title,
      })
    );
  };
  const onDeleteHandler = () => {
    dispatch(DeletHandler({ id }));
  };
  return (
    <li className={`list-group-item ${completed && "list-group-item-success"}`}>
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            defaultChecked={completed}
            onChange={isChecked}
          ></input>
          {title}
        </span>
        <button className="btn btn-danger" onClick={onDeleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
