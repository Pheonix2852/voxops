import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
export const appRouter = createTRPCRouter({
  health: baseProcedure.query(async () => {
    //throw new Error("This is an error from the server");
    return { status: "ok" };
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
