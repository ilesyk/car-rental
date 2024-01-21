import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Loader } from "../Loader";
import { SharedWrapper } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <SharedWrapper>
      <Header />
      <main>
        <Suspense  fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </SharedWrapper>
  );
};
