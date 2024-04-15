import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddTodoForm from "./forms/add-todo";
import { buttonVariants } from "./ui/button";

type Props = {
  userId: string;
};

const AddTodo = ({ userId }: Props) => {
  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({
          variant: "default",
          className: "mx-auto ",
        })}
      >
        Add Todo
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new Todo</DialogTitle>
        </DialogHeader>
        <div className="p-2">
          <AddTodoForm userId={userId} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodo;
