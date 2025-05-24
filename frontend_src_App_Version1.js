import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TrainingSupport from "./pages/TrainingSupport";
import NotificationCenter from "./components/NotificationCenter";
import RoleBasedRecommendations from "./components/RoleBasedRecommendations";
import MobileLayout from "./layouts/MobileLayout";
import DesktopLayout from "./layouts/DesktopLayout";
import { useResponsive } from "./utils/useResponsive";

function App() {
  const isMobile = useResponsive();
  return (
    <BrowserRouter>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
      <NotificationCenter />
      <RoleBasedRecommendations />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/training" element={<TrainingSupport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;