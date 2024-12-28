import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";  // Correct import for appRouter

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-6lma4l85kb1uva5d.us.auth0.com"
      clientId="CsjYCRQ7vGejDE8Dvot3dysWVk6NVb7K"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <RouterProvider router={appRouter} />
    </Auth0Provider>
  </React.StrictMode>
);
