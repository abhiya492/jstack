import { Hono } from "hono"
import { cors } from "hono/cors"
import { handle } from "hono/vercel"
import { authRouter } from "./routers/auth-router"
import { categoryRouter } from "./routers/category-router"


const app = new Hono().basePath("/api").use(cors())


const appRouter = app
  .route("/auth", authRouter)
  .route("/category", categoryRouter)


// The handler Next.js uses to answer API requests
export const httpHandler = handle(app)

export default app

// export type definition of API
export type AppType = typeof appRouter
