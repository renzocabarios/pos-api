import V1 from "./v1";
import { Express } from "express";

export const routes = [
  {
    url: "/api/v1/sample",
    route: V1.sampleRoute,
  },
  {
    url: "/api/v1/users",
    route: V1.usersRoute,
  },
  {
    url: "/api/v1/auth",
    route: V1.authRoute,
  },
  {
    url: "/api/v1/items",
    route: V1.itemsRoute,
  },
];
export const addRoutes = (app: Express) => {
  routes.forEach((route) => {
    app.use(route.url, route.route);
  });
};
