import React from "react";
import Sidebar from "../../../components/dashboard/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div style={{ display: "flex", minHeight: "100vh", width: "100%" }}>
        {/* Sidebar - Left Column */}
        <div
          style={{
            width: "25%",
            backgroundColor: "#f8f9fa",
            padding: "20px",
            borderRight: "1px solid #dee2e6",
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content - Right Column */}
        <div
          style={{
            width: "75%",
            padding: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
