import { getTodos } from "@/server/get-todos";
import { Button } from "./ui/button";
import { Card, CardDescription, CardTitle } from "./ui/card";
import DeleteTodoButton from "./buttons/delete-todo-button";
import CompleteTodoButton from "./buttons/complete-todo-button";
import { LucideCheck } from "lucide-react";

type Props = {
  userId: string;
};

const TodosList = async ({ userId }: Props) => {
  const awaitTodos = await getTodos(userId);

  return (
    <div className="flex flex-col max-w-xl mt-5 mx-auto gap-6">
      {awaitTodos.reverse().map((todo) => {
        return (
          <Card key={todo.id} className="p-5 flex">
            <div className="flex-1">
              <CardTitle>{todo.title}</CardTitle>
              <CardDescription>{todo.description}</CardDescription>
            </div>
            <div className="flex items-center gap-5">
              {todo.completed ? (
                <div>
                  <LucideCheck className="w-5 h-5" />
                </div>
              ) : (
                <CompleteTodoButton todoId={todo.id} />
              )}
              <DeleteTodoButton todoId={todo.id} />
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default TodosList;
