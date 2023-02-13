import {
  ListItemButton,
  ListItemIcon,
  Typography,
  styled,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { ListItemButtonProps } from "@mui/material/ListItemButton";

interface ListItemProps {
  icon: JSX.Element;
  text: string;
  props?: ListItemButtonProps;
}

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: orange[50],
  },
}));

export const ListItem = ({
  icon,
  text,
  selected,
  onClick,
  props,
}: ListItemProps & ListItemButtonProps) => {
  return (
    <StyledListItemButton {...props} selected={selected} onClick={onClick}>
      <ListItemIcon sx={{ minWidth: "36px" }}>{icon}</ListItemIcon>
      <Typography variant="body2" color="darkgray">
        {text}
      </Typography>
    </StyledListItemButton>
  );
};
