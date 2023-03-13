import { Box } from "@mui/material";
import { Flex } from "components/Base";
import { SIDEBAR_TOTAL_WIDTH } from "Layout";
import { forwardRef } from "react";

type ContentAreaProps = {
  children?: React.ReactNode;
};

const ContentArea = forwardRef<HTMLDivElement, ContentAreaProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <Flex
        ref={ref}
        {...rest}
        bgcolor={"lightgray"}
        width={`calc(100vw - ${SIDEBAR_TOTAL_WIDTH}px)`}
        height="100%"
        gap={3}
        py={5}
        px={10}
      >
        {children}
      </Flex>
    );
  }
);

export default ContentArea;
