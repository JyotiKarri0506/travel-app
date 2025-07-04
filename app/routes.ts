import { type RouteConfig, layout, route } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;
// this file is like configuration file where above routes file points to the main file which we wanna display like main page
// instead of index lets use 2 additional methods
// route and location of the file in route(path, file)
export default [
  route('sign-in', 'routes/root/sign-in.tsx'),
  // its not a component but a method
  layout("routes/admin/admin-layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all-users", "routes/admin/all-users.tsx"),
  ]),
] satisfies RouteConfig;
