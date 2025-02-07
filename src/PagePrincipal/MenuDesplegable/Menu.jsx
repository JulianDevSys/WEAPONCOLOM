import React, { useState } from "react";
import "./StyleMenu.css";

export default function Menu () {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
        <li>
          <i></i> <span>Dashboard</span>
        </li>
        <li>
          <i>📊</i> <span>Market Overview</span>
        </li>
        <li>
          <i>📈</i> <span>Analytics</span>
        </li>
        <li>
          <i>📄</i> <span>Reports</span>
        </li>
        <li>
          <i>🏭</i> <span>Industries</span>
        </li>
        <li>
          <i>⚙️</i> <span>Settings</span>
        </li>
        <li>
          <i>🔔</i> <span>Notifications</span>
        </li>
      </ul>
    </div>
  );
};

