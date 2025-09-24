import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Categories from "@pages/Categories";
import Home from "@pages/Home";
import About from "@pages/About";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "products/:prefix",
        element: <Products />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
