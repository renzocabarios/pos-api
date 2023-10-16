import sampleRoute from "./sample/route";
import usersRoute from "./users/route";
import authRoute from "./auth/route";
import itemsRoute from "./items/route";
import transactionsRoute from "./transactions/route";
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
  {
    url: "transactions",
    route: transactionsRoute,
  },
].map((e: any) => {
  e.url = "v1/" + e.url;
  return e;
});
