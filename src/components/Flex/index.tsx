import type { FunctionComponent, ReactNode } from "react";

import type { StackProps } from "@mui/material";
import { Stack } from "@mui/material";

interface FLexProps extends StackProps {
  children?: ReactNode;
}

const FLex: FunctionComponent<FLexProps> = (props) => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} {...props}>
        {props.children}
      </Stack>
    </>
  );
};

export default FLex;
