import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import React from "react";

const HomePage = async () => {
  await requireAuth();

  const data = await caller.getUsers();
  return <div className="">{JSON.stringify(data)}</div>;
};

export default HomePage;
