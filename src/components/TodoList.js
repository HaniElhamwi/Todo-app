import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  //   const todose = [
  //     { id: 1, title: "todo1", completed: false },
  //     { id: 2, title: "todo2", completed: false },
  //     { id: 3, title: "todo3", completed: true },
  //     { id: 4, title: "todo4", completed: false },
  //     { id: 5, title: "todo5", completed: false },
  //   ];

  console.log("checked");
  return (
    <ul className="list-group">
      {todos.arr.map((todo) => (
        <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default TodoList;
