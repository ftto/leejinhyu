import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Main from "./pages/Main";

const GlobalStyle = createGlobalStyle`
  *, :after, :before {
    box-sizing: border-box;
  }
`;

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />

    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Root;
