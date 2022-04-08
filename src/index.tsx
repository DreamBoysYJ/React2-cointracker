import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Darktheme, Whitetheme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import Toggle from "./Toggle";

import App from "./App";
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
