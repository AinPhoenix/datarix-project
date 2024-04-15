"use client";

import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import completeTodo from "@/server/complete-todo";

type Props = {
  todoId: string;
};

const CompleteTodoButton = ({ todoId }: Props) => {
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: completeTodo,
    onSuccess: () => {
      router.refresh();
    },
  });

  const onCompleteHandler = () => {
    mutateAsync({ todoId: todoId });
  };

  return (
    <Button disabled={isPending} onClick={onCompleteHandler} size="sm">
      Complete
    </Button>
  );
};

export default CompleteTodoButton;
