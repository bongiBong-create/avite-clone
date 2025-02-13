import { createHashRouter, Navigate } from "react-router-dom";
import { MainLayout } from "../../components/main-layout";
import { FormAds } from "../../pages/form-ads";
import { Ads } from "../../pages/ads";
import { AdsDetails } from "../../pages/ads-details";

export const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Navigate to="/list" /> },
      { path: "list", element: <Ads /> },
      { path: "form", element: <FormAds /> },
      { path: "form/:id", element: <FormAds /> },
      { path: "item/:id", element: <AdsDetails /> },
    ],
  },
]);
