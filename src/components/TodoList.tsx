import React from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <div className="todos">
      {todos.map((t) => {
        return <li key={t.id}>{t.todo}</li>;
      })}
    </div>
  );
};

export default TodoList;
