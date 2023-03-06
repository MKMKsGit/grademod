import { Box, BoxProps as FlexProps, styled } from "@mui/material";

const Flex = styled(Box)<FlexProps>(({ theme }) => ({
  display: "flex",
}));

Flex.defaultProps = {
  flexDirection: "column",
};

export default Flex;
export { Flex };
export type { FlexProps };
