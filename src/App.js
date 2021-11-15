import React from "react";

import { GlobalContextProvider } from "./context";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import { PlayerPage, HomePage, GifPage } from "./pages";

import "./scss/main.scss";

const App = () => {
  return (
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/gif" element={<GifPage />} />
        </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
  );
};

export default App;
