import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.get("/", async () => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        contains: "Star Wars"
      }
    }
  });

  return habits;
});

app.listen({port: 3000}).then(()=> console.log("Listening on port 3000"));