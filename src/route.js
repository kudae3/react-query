import { createBrowserRouter } from "react-router";
import Home from './components/Home'
import Layout from "./layout";
import RqSuperHeros from "./components/rqSuperHeros";
import SuperHeros from "./components/SuperHeros";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    // loader: loadRootData,
    children: [
        {
            path: "/",
            Component: Home,
        },
        {
            path: "/rq-superheroes",
            Component: RqSuperHeros,
        }, 
        {
            path: "/superheroes",
            Component: SuperHeros
        }
    ]
  },
]);