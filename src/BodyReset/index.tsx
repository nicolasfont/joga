import { ReactNode, useEffect } from "react";
import { injectGlobal } from "@emotion/css";

type BodyResetProps = {
  children: ReactNode;
};

export const BodyReset = ({ children }: BodyResetProps) => {
  useEffect(() => {
    injectGlobal`
      body {
          margin: 0;
          height: 100vh;
          display: flex;
          flex: 1;
      }`;
  }, []);
  return children;
};
