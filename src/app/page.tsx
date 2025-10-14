import prisma from "@/lib/db";
import React from "react";

const HomePage = async () => {
  const user = await prisma.user.findMany();
  return <div className="text-red-500">{JSON.stringify(user)}</div>;
};

export default HomePage;
