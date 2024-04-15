"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "../ui/button";

const LogoutButton = () => {
  const { signOut } = useClerk();

  const onLogoutHandler = async () => {
    await signOut();
  };

  return <Button onClick={onLogoutHandler}>Logout</Button>;
};

export default LogoutButton;
