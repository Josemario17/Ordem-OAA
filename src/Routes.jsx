import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Error/ErrorPage";
import AOrdem from "./AOrdem/AOrdem";
import Sign from "./SignInUp/Sign";
import Contacte from "./Contact/Contact";
import Biblioteca from "./Biblioteca/Biblioteca";
import Regulamentos from "./Regulamentos/Regulamentos";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AOrdem" element={<AOrdem />} />
        <Route path="/Sessao" element={<Sign />} />
        <Route path="/Biblioteca" element={<Biblioteca />} />
        <Route path="/Contacto/:Form" element={<Contacte />} />
        <Route path="/Regulamentos" element={<Regulamentos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
