import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todoes-heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>
      <div className="todos remove">
        <span className="todoes-heading">Completed Tasks</span>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
