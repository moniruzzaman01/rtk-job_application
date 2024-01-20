import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import EditJob from "../pages/EditJob";
import AddJob from "../pages/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:jobType",
        element: <Home />,
      },
      {
        path: "/jobs/:jobType",
        element: <Home />,
      },
      {
        path: "/jobs/:jobType",
        element: <Home />,
      },
      {
        path: "/edit-job/:jobId",
        element: <EditJob />,
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
    ],
  },
]);

export default router;
