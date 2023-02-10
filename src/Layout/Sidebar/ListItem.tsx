import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

interface ListItemProps {
  icon: JSX.Element;
  text: string;
}

export const ListItem = ({ icon, text }: ListItemProps) => {
  return (
    <ListItemButton>
      <ListItemIcon sx={{ minWidth: "36px" }}>{icon}</ListItemIcon>
      <Typography variant="body2" color="darkgray">
        {text}
      </Typography>
    </ListItemButton>
  );
};
