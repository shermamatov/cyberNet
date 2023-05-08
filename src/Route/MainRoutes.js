import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MeetingPage from "../pages/MeetingPage";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/meeting", element: <MeetingPage />, id: 2 },
    { link: "/privacy_policy", element: <PrivacyPolicy />, id: 3 },
    { link: "/ru", element: <HomePage />, id: 4 },
    { link: "/ru/meeting", element: <MeetingPage />, id: 5 },
    { link: "/ru/privacy_policy", element: <PrivacyPolicy />, id: 6 },
    { link: "/en", element: <HomePage />, id: 4 },
    { link: "/en/meeting", element: <MeetingPage />, id: 5 },
    { link: "/en/privacy_policy", element: <PrivacyPolicy />, id: 6 },
    { link: "/arm", element: <HomePage />, id: 4 },
    { link: "/arm/meeting", element: <MeetingPage />, id: 5 },
    { link: "/arm/privacy_policy", element: <PrivacyPolicy />, id: 6 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
