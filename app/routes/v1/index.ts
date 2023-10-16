import sampleRoute from "./sample/route";
import usersRoute from "./users/route";
import authRoute from "./auth/route";
import itemsRoute from "./items/route";

export default [
  {
    url: "sample",
    route: sampleRoute,
  },
  {
    url: "users",
    route: usersRoute,
  },
  {
    url: "auth",
    route: authRoute,
  },
  {
    url: "items",
    route: itemsRoute,
  },
].map((e: any) => {
  e.url = "v1/" + e.url;
  return e;
});
