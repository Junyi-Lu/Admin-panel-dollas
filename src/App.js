import "./styles/style.css";
import React, { useState } from "react";
import Maindash from "./components/Maindash";
import Sidebar from "./components/Sidebar";
import Rightside from "./components/Rightside";

function App() {
  // State to manage the visibility of the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // Function to toggle the sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  return (
    <div className="App">
      <div className="AppGlass">
        {isSidebarOpen && <Sidebar />}
        <Maindash toggleSidebar={toggleSidebar} />
        <Rightside />
      </div>
    </div>
  );
}

export default App;
