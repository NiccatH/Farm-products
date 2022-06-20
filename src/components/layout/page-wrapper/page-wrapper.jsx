import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import { Main } from "./styles";

function PageWrapper({ children, pageUrl }) {
  return (
    <>
      <Header pageUrl={pageUrl} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
