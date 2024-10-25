import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "project/:id",
        element: <ProjectDetail />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="bg-bgGrey text-mainBlack">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
