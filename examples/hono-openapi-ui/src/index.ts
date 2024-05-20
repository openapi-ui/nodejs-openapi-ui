import { serve } from "@hono/node-server";
import { OpenAPIHono, createRoute, z } from "@hono/zod-openapi";
import { openApiUIReference } from "@openapi-ui/hono-openapi-ui";

const app = new OpenAPIHono();

// Example route
app.openapi(
  createRoute({
    method: "get",
    path: "/hello-world",
    description: "Respond a message",
    tags: ["basic example"],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      message: "hello",
    });
  },
);

app.openapi(
  createRoute({
    name: "Get all posts",
    method: "get",
    path: "/posts",
    description: "Returns all posts",
    tags: ["posts"],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: z.object({
              posts: z.array(
                z.object({
                  id: z.number().default(123),
                  title: z.string(),
                  body: z.string(),
                }),
              ),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      posts: [
        {
          id: 123,
          title: "My Blog Post Title",
          body: "My Blog Post Body",
        },
      ],
    });
  },
);

app.openapi(
  createRoute({
    name: "Create post",
    method: "post",
    path: "/posts",
    description: "Create a new post",
    tags: ["posts"],
    request: {
      body: {
        content: {
          "application/json": {
            schema: z.object({
              title: z.string(),
              body: z.string(),
            }),
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: z.object({
              id: z.number().default(123),
              title: z.string(),
              body: z.string(),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      id: 123,
      title: "My Blog Post Title",
      body: "My Blog Post Body",
    });
  },
);

app.openapi(
  createRoute({
    name: "Delete Post",
    method: "delete",
    path: "/posts/{id}",
    description: "Delete a post",
    tags: ["posts"],
    request: {
      params: z.object({
        id: z.number().default(123),
      }),
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: z.object({
              status: z.string().default("OK"),
              message: z.string().default("Post deleted"),
            }),
          },
        },
      },
      404: {
        description: "Not Found",
        content: {
          "application/json": {
            schema: z.object({
              status: z.string().default("ERROR"),
              message: z.string().default("Post not found"),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({
      status: "OK",
      message: "Post deleted",
    });
  },
);

const docsPath = "/openapi";
const specPath = "/openapi.json";

app.doc(specPath, {
  info: {
    title: "Example API",
    description: "Example API description",
    version: "v1",
  },
  openapi: "3.0.0",
});

app.use(
  docsPath,
  openApiUIReference({
    title: "openapi docs",
    description: "openapi docs description",
    specPath: specPath,
  }),
);

const PORT = Number(process.env.PORT) || 8004;
const HOST = process.env.HOST || "0.0.0.0";
serve(
  {
    fetch: app.fetch,
    port: PORT,
    hostname: HOST,
  },
  () => {
    console.log(`✅ Hono Middleware listening on http://127.0.0.1:${PORT}${docsPath}`);
  },
);
