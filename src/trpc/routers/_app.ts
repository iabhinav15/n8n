import { inngest } from "@/inngest/client";
import { createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export const appRouter = createTRPCRouter({
  testAi: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "execute/ai",
    });
    return { success: true, message: "AI execution triggered!" };
  }),
  getWorkflows: protectedProcedure.query(({ ctx }) => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    // Fetch the video
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "abhi@gmail.com",
      },
    });

    return {
      success: true,
      message: "Workflow created and event sent to Inngest!",
    };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
