import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes/routes.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  </StrictMode>,
);
