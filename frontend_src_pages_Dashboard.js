import React from "react";
import { WidgetGrid } from "../components/WidgetGrid";
import { DataStorytelling } from "../components/DataStorytelling";
import { CollaborationPanel } from "../components/CollaborationPanel";

export default function Dashboard() {
  return (
    <div>
      <WidgetGrid />
      <DataStorytelling />
      <CollaborationPanel />
    </div>
  );
}