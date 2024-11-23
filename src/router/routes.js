import { lazy } from "react";

export const PageRoutes = {
    // Public Routes
    Dashboard: "/dashboard",
    Biling: "/biling",
    Company: "/company",
    Orders: "/orders",
    Setting: "/setting",
    Users: "/users",
    Support: "/support",
};
export const publicRoutes = [
    {
        path: PageRoutes.Dashboard,
        componentPath: lazy(() => import("../pages/Dashboard")),
    },
    {
        path: PageRoutes.Orders,
        componentPath: lazy(() => import("../pages/Orders")),
    },
    {
        path: PageRoutes.Biling,
        componentPath: lazy(() => import("../pages/Biling")),
    },
    {
        path: PageRoutes.Company,
        componentPath: lazy(() => import("../pages/Company")),
    },
    {
        path: PageRoutes.Setting,
        componentPath: lazy(() => import("../pages/Setting")),
    },
    {
        path: PageRoutes.Users,
        componentPath: lazy(() => import("../pages/Users")),
    },
    {
        path: PageRoutes.Support,
        componentPath: lazy(() => import("../pages/Support")),
    },
];
