import { auth, AuthStatus, AuthObject } from "@clerk/nextjs/server";
import SignInButton from "@/components/buttons/signin-button";
import LogoutButton from "@/components/buttons/logout-button";
import AddTodo from "@/components/AddTodo";
import TodosList from "@/components/TodosList";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  const isSignedIn = userId !== null;

  return (
    <main className="min-h-screen">
      <header className="flex p-3 justify-between">
        <h1 className="font-medium">TODO APP</h1>
        {isSignedIn ? <LogoutButton /> : <UserButton />}
      </header>

      {!isSignedIn && (
        <section className="max-w-7xl mx-auto">
          <h1 className="text-6xl tracking-tighter font-bold text-center  mt-24">
            Welcome to Todo List
          </h1>
          <p className="text-center text-lg mt-10">
            Streamline your schedule, conquer your day. Your ultimate todo list
            app awaits.
          </p>

          <div className="flex justify-center mt-20">
            <SignInButton />
          </div>
        </section>
      )}

      {userId && (
        <section className="max-w-7xl mx-auto">
          <h1 className="text-6xl tracking-tighter font-bold text-center  mt-24">
            List of Todos
          </h1>
          <p className="text-center text-lg mt-10">
            Streamline your schedule, conquer your day. Your ultimate todo list
            app awaits.
          </p>
          <div className="flex justify-center mt-5">
            <AddTodo userId={userId ?? ""} />
          </div>

          <TodosList userId={userId} />
        </section>
      )}
    </main>
  );
}
