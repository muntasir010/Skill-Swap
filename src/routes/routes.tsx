import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div className="p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to SkillSwap!
            </h1>
            <p className="mt-4 text-gray-600">
              Explore and exchange skills with others.
            </p>
          </div>
        ),
      },
    ],
  },
]);
