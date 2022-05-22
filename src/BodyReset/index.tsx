import { ReactNode, useEffect } from "react";
import { injectGlobal } from "@emotion/css";

type BodyResetProps = {
  children?: ReactNode;
};

export const BodyReset = ({ children }: BodyResetProps) => {
  useEffect(() => {
    injectGlobal`
      body {
        display: flex;
        flex: 1;
        height: 100vh;
        margin: 0;
      }`;
  }, []);
  return <>{children}</>;
};
