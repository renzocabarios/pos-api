import V1 from "./v1";
import { Express } from "express";

const ROUTES: any[] = [...V1];

export const addRoutes = (app: Express) => {
  ROUTES.forEach((route) => {
    app.use("/api/" + route.url, route.route);
  });
};
