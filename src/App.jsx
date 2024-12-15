import React from "react";

/* import Routes file */
import { Routes } from "./routes/Routes";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  )
}

export default App
