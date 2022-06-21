import { ReactNode, useEffect } from "react";
import { injectGlobal } from "@emotion/css";

type ResetProps = {
  children?: ReactNode;
  /**
   * CSS selectors for the elements to reset
   */
  targets?: string[];
};

export const Reset = ({
  children,
  targets = ["body", "#root"],
}: ResetProps) => {
  useEffect(() => {
    injectGlobal`
      ${targets.join(",")} {
        box-sizing: border-box;
        display: flex;
        flex: 1;
        height: 100vh;
        margin: 0;
      }`;
  }, []);
  return <>{children}</>;
};
