"use client";

import deleteTodo from "@/server/delete-todo";
import { useMutation } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  todoId: string;
};

const DeleteTodoButton = ({ todoId }: Props) => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      router.refresh();
    },
  });

  const onDeleteHandler = () => {
    mutateAsync({ todoId: todoId });
  };

  return (
    <Button
      disabled={isPending}
      onClick={onDeleteHandler}
      size="sm"
      variant="destructive"
    >
      Delete
    </Button>
  );
};

export default DeleteTodoButton;
