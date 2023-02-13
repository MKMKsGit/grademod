import { ListItemButton, ListItemIcon, Typography } from "@mui/material";
import { ListItemButtonProps } from "@mui/material/ListItemButton";

interface ListItemProps {
  icon: JSX.Element;
  text: string;
  props?: ListItemButtonProps;
}

export const ListItem = ({
  icon,
  text,
  selected,
  onClick,
  props,
}: ListItemProps & ListItemButtonProps) => {
  return (
    <ListItemButton {...props} selected={selected} onClick={onClick}>
      <ListItemIcon sx={{ minWidth: "36px" }}>{icon}</ListItemIcon>
      <Typography variant="body2" color="darkgray">
        {text}
      </Typography>
    </ListItemButton>
  );
};
