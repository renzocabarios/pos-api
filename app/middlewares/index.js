import bodyParser from "body-parser";
import cors from "cors";
import authMiddleware from "./auth.middleware.js";

export const middlewares = [
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  cors(),
  authMiddleware,
];

export const addMiddlewares = (app) => {
  middlewares.forEach((middleware) => {
    app.use(middleware);
  });
};
