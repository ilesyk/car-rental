import { lazy } from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/HomePage";
import { GlobalStyle } from "./GlobalStyle";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Catalog = lazy(() => import("../pages/CatalogPage"));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog isFavorite={false} />} />
          <Route path="/package.jsonfavorite" element={<Catalog isFavorite={true} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster/>
    </>
  );
};
export default App;
