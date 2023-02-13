import { useTranslation } from "react-i18next";

import { Box, Divider, List, ListSubheader } from "@mui/material";
import { ListItem } from "./ListItem";
import ModeSwitch from "./ModeSwitch";

import DashboardIcon from "@mui/icons-material/Dashboard";
import DatabaseIcon from "assets/icons/DatabaseIcon";
import SchoolIcon from "@mui/icons-material/School";
import HonorIcon from "assets/icons/HonorIcon";
import StarIcon from "@mui/icons-material/Star";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import StudentIcon from "assets/icons/StudentIcon";
import NotebookIcon from "assets/icons/NotebookIcon";
import UserIcon from "assets/icons/UserIcon";
import LanguageSelect from "./LanguageSelect";

const StyledSubheader = ({ text }: { text: string }) => {
  return (
    <ListSubheader
      sx={{
        fontSize: "18px",
        fontWeight: "bold",
        lineHeight: "24px",
        color: "black",
      }}
    >
      {text}
    </ListSubheader>
  );
};

const Sidebar = () => {
  const { t } = useTranslation("sidebar");
  return (
    <Box
      sx={{
        height: "100%",
        width: "206px",
        display: "flex",
        flexDirection: "column",
        margin: "24px 12px",
        gap: "20px",
      }}
    >
      <img
        src={require("assets/logo.png")}
        alt="logo"
        width="100%"
        height="auto"
      />
      <ModeSwitch />
      <List component="nav" aria-label="mainpage and database">
        <ListItem
          icon={<DashboardIcon sx={{ color: "darkgray" }} />}
          text={t("dashboard")}
        />
        <ListItem
          icon={<DatabaseIcon sx={{ color: "white" }} />}
          text={t("database")}
        />
      </List>
      <List
        component="nav"
        aria-label="reports"
        subheader={<StyledSubheader text={t("reports.title")} />}
      >
        <ListItem
          icon={<SchoolIcon sx={{ color: "darkgray" }} />}
          text={t("reports.oldSchool")}
        />
        <ListItem
          icon={<HonorIcon sx={{ color: "darkgray" }} />}
          text={t("reports.honor")}
        />
        <ListItem
          icon={<StudentIcon sx={{ color: "white" }} />}
          text={t("reports.student")}
        />
      </List>
      <List
        component="nav"
        aria-label="predict"
        subheader={<StyledSubheader text={t("prediction.title")} />}
      >
        <ListItem
          icon={<StarIcon sx={{ color: "darkgray" }} />}
          text={t("prediction.honorRecieved")}
        />
        <ListItem
          icon={<NotebookIcon sx={{ color: "darkgray" }} />}
          text={t("prediction.status")}
        />
      </List>
      <Divider />
      <List component="nav" aria-label="profiles">
        <ListItem
          icon={<UserIcon sx={{ color: "white" }} />}
          text={t("profile")}
        />
        <ListItem
          icon={<HelpOutlineIcon sx={{ color: "darkgray" }} />}
          text={t("help")}
        />
        <LanguageSelect />
      </List>
    </Box>
  );
};

export default Sidebar;
