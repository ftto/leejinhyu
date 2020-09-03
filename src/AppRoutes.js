import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Main from "./pages/Main";

import MonumentGroteskRegularWoff from "./assets/fonts/MonumentGrotesk-Regular.woff";
import MonumentGroteskRegularTtf from "./assets/fonts/MonumentGrotesk-Regular.ttf";
import MonumentGroteskRegularOtf from "./assets/fonts/MonumentGrotesk-Regular.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'MonumentGrotesk Regular';
    src: local('MonumentGrotesk Regular'),
        url(${MonumentGroteskRegularWoff}) format('woff'),
        url(${MonumentGroteskRegularTtf}) format('ttf'),
        url(${MonumentGroteskRegularOtf}) format('eot');
  }

  body {
    background-color: #000;
    color: #fff;
    padding: 0;
    margin: 0;
  }

  *, :after, :before {
    box-sizing: border-box;
    font-family: 'MonumentGrotesk Regular', AppleSDGothicNeo, sans-serif;
    
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
