"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SignInButton = () => {
  const { redirectToSignIn } = useClerk();

  const handleSignIn = async () => {
    try {
      await redirectToSignIn({
        afterSignInUrl: "/auth-check?url=/",
      });
    } catch (error) {
      console.error("Error signing in", error);
    }
  };

  return (
    <Button className="w-40" onClick={handleSignIn}>
      Sign In
    </Button>
  );
};

export default SignInButton;
