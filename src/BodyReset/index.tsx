import { useEffect } from "react";
import { injectGlobal } from "@emotion/css";

export const BodyReset = () => {
  useEffect(() => {
    injectGlobal`
      body {
          margin: 0;
          height: 100vh;
          display: flex;
          flex: 1;
      }`;
  }, []);
  return null;
};
