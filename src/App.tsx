import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewRes from "./pages/NewRes";
import EditRes from "./pages/EditRes";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new_res" element={<NewRes />} />
          <Route path="/edit_res" element={<EditRes />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
