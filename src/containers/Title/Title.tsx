import { Flex, Text } from "components/Base";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SIDEBAR_TOTAL_WIDTH } from "Layout";

export interface Tabs {
  displayName: string;
  path: string;
}

type TitleProps = {
  title: string;
  tabs: Tabs[];
};

const Title = ({ title, tabs }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <Flex
      mt={5.5}
      ml={10}
      gap={3}
      width={`calc(100% - ${SIDEBAR_TOTAL_WIDTH}px)`}
    >
      <Text variant="h2">{title}</Text>
      <Flex flexDirection="row" gap={4}>
        {tabs.map((tab, index) => {
          const { path } = tab;
          const isMatchPath = window.location.pathname === path;
          const handleClick = () => {
            navigate(path);
          };
          return (
            <Button
              key={`tab-${index}`}
              size="large"
              sx={{
                borderRadius: 0,
                padding: 0,
                borderBottom: `${isMatchPath ? "2px" : "0px"} solid`,
                borderButtomColor: `${isMatchPath ? "yellow" : "transparent"}`,
                color: `${isMatchPath ? "yellow" : "gray"}`,
              }}
              onClick={handleClick}
            >
              {tab.displayName}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Title;
