"use client";

import { createNewTodo } from "@/server/create-new-todo";
import { TodoSchema, TypeTodo } from "@/utils/valitators";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type Props = {
  userId: string;
};

const AddTodoForm = ({ userId }: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    resetField,
  } = useForm<TypeTodo>({
    resolver: zodResolver(TodoSchema),
  });

  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: createNewTodo,
    onSuccess: () => {
      resetField("title");
      resetField("description");
      router.refresh();
    },
  });

  const onSubmitHandler: SubmitHandler<TypeTodo> = (data) => {
    mutateAsync({
      description: data.description.trim(),
      title: data.title.trim(),
      userId: userId,
    });
  };

  return (
    <div>
      <form className="space-y-2" onSubmit={handleSubmit(onSubmitHandler)}>
        <div>
          <label htmlFor="title"> Title </label>
          <Input
            disabled={isPending}
            {...register("title")}
            type="text"
            id="title"
          />
          {errors.title && (
            <div className="text-red-500 text-sm">{errors.title.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="description"> Description </label>
          <Input
            disabled={isPending}
            {...register("description")}
            type="text"
            id="description"
          />
          {errors.description && (
            <div className="text-red-500 text-sm">
              {errors.description.message}
            </div>
          )}
        </div>
        <Button disabled={isPending} type="submit">
          {" "}
          Add Todo{" "}
        </Button>
      </form>
    </div>
  );
};

export default AddTodoForm;
