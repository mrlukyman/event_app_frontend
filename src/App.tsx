import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GlobalStyle from './Styles/GlobalStyles';
import { Form } from './Components/Form';
import { EventPanel } from './Components/EventPanel';
import { Header } from './Components/Header';
import { Container } from './Styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<EventPanel />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
