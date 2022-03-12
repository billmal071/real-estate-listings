import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "@App";
import ErrorFallback from "@components/fallback/ErrorBoundary";

import "./index.scss";
import { RecoilRoot } from "recoil";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <App />
        </ErrorBoundary>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
