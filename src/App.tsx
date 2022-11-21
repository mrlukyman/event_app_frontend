import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from './Styles/GlobalStyles';
import { Form } from './Components/Form';

import { EventPanel } from './Components/EventPanel';

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/form" element={<Form />} />
        </Routes>
        <EventPanel />

      </BrowserRouter>

    </>
  );
}

export default App;
