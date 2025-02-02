import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./pages/Home";
import Post from "@pages/Post";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
    ],
  },
]);

export default router;
