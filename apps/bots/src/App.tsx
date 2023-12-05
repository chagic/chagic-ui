import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { generateRoutes, items } from "@/constant/menus";


const router = createBrowserRouter(generateRoutes(items));

function App() {
  return <RouterProvider router={router} />;
}

export default App;
