import React, { useState } from "react";

import Charts from './components/Charts';
import Navbar from "./components/Navbar";
import useDarkMode from './components/hooks/useDarkMode';
import "./style.css";

const App = () => {
  const [darkMode, setDarkMode, coinData] = useDarkMode();

  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;