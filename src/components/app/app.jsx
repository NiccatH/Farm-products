import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import products from "/src/mocks/products";
import MainPage from "/src/components/pages/main-page/main-page";
import Order from "/src/components/pages/order/order";
import { GlobalStyle } from "./styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppRoute } from "/src/const";
import ScrollTop from "/src/components/ui/scroll-top/scroll-top";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollTop />
        <Switch>
          <Route exact path={AppRoute.MAIN}>
            <PageWrapper pageUrl={AppRoute.MAIN}>
              <MainPage features={features} />
            </PageWrapper>
          </Route>
          <Route exact path={AppRoute.BUY}>
            <PageWrapper pageUrl={AppRoute.BUY}>
              <Order products={products} />
            </PageWrapper>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
