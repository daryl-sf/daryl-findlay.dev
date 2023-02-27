import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/test",
      element: <div>test</div>
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
