"use client";

import { createNewUser } from "@/server/create-new-user";
import { VerifyUserExists } from "@/server/verify-user-exists";
import { useAuth, useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LucideLoader2 } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  params: {
    url: string;
  };
};

const Page = ({ params }: Props) => {
  const { userId } = useAuth();
  const { user } = useUser();

  const router = useRouter();

  const { isLoading: userLoad, data: userData } = useQuery({
    queryKey: ["user-auth", userId],
    queryFn: async () => {
      return await VerifyUserExists(userId ?? "");
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      if (!userId) throw Error();

      await createNewUser({
        id: userId,
        email: user?.primaryEmailAddress?.emailAddress ?? "",
      });
    },

    onSuccess(data, variables, context) {
      router.push("/");
    },
  });

  if (userData !== "not-found" && userId) {
    router.push("/");
  }

  if (userId && userData === "not-found" && !isPending) {
    mutate();
  }

  return (
    <div className="min-h-screen">
      <div className="mx-auto mt-28 max-w-7xl flex justify-center flex-col items-center">
        <LucideLoader2 className="w-8 h-8 animate-spin" />
        <h1 className="font-medium">Loading...</h1>
      </div>
    </div>
  );
};

export default Page;
