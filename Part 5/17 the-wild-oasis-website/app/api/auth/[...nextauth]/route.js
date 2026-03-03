import { handlers } from "@/app/_lib/auth";
export const GET =
  handlers?.GET ??
  (() => new Response("NextAuth handler missing", { status: 500 }));
export const POST =
  handlers?.POST ??
  (() => new Response("NextAuth handler missing", { status: 500 }));
