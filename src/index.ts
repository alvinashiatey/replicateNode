import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import replicateHandler from "./replicate";

const api = new Hono();

api.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));
api.post("/replicate", cors(), replicateHandler);

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: api.fetch,
  port,
});
