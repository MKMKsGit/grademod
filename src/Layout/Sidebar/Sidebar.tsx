import { useTranslation } from "react-i18next";
import { useState } from "react";

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

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import LogIcon from "assets/icons/LogIcon";
import { useNavigate, useParams } from "react-router";

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
  const [mode, setMode] = useState("user");
  const [selected, setSelected] = useState(0);
  const { t } = useTranslation("sidebar");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  //TODO: เพิ่ม path ให้กับ index 5,6,10 และ 11

  const navigationList = [
    { index: 0, path: `../user/${id}` },
    { index: 1, path: `../user/${id}/database` },
    { index: 2, path: `../user/${id}/school` },
    { index: 3, path: `../user/${id}/honor` },
    { index: 4, path: `../user/${id}/student` },
    { index: 5, path: `../user/${id}` },
    { index: 6, path: `../user/${id}` },
    { index: 7, path: `../user/${id}/admin/management` },
    { index: 8, path: `../user/${id}/admin/log` },
    { index: 9, path: `../user/${id}/profile` },
    { index: 10, path: `../user/${id}/help` },
    { index: 11, path: `../user/${id}/admin/help` },
    { index: 12, path: `../user/${id}/admin` },
  ];

  const handleListItemClick = (index: number) => {
    setSelected(index);
    const data = navigationList[index];
    navigate(data.path, { replace: true });
  };

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
      <ModeSwitch mode={mode} setMode={setMode} setSelected={setSelected} />
      {mode === "user" ? (
        <>
          <List component="nav" aria-label="mainpage and database">
            <ListItem
              icon={<DashboardIcon sx={{ color: "darkgray" }} />}
              text={t("dashboard")}
              selected={selected === 0}
              onClick={() => handleListItemClick(0)}
            />
            <ListItem
              icon={<DatabaseIcon sx={{ color: "white" }} />}
              text={t("database")}
              selected={selected === 1}
              onClick={() => handleListItemClick(1)}
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
              selected={selected === 2}
              onClick={() => handleListItemClick(2)}
            />
            <ListItem
              icon={<HonorIcon sx={{ color: "darkgray" }} />}
              text={t("reports.honor")}
              selected={selected === 3}
              onClick={() => handleListItemClick(3)}
            />
            <ListItem
              icon={<StudentIcon sx={{ color: "white" }} />}
              text={t("reports.student")}
              selected={selected === 4}
              onClick={() => handleListItemClick(4)}
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
              selected={selected === 5}
              onClick={() => handleListItemClick(5)}
            />
            <ListItem
              icon={<NotebookIcon sx={{ color: "darkgray" }} />}
              text={t("prediction.status")}
              selected={selected === 6}
              onClick={() => handleListItemClick(6)}
            />
          </List>
        </>
      ) : (
        <>
          <List component="nav" aria-label="mainpage and database">
            <ListItem
              icon={<DashboardIcon sx={{ color: "darkgray" }} />}
              text={t("dashboard")}
              selected={selected === 12}
              onClick={() => handleListItemClick(12)}
            />
          </List>
          <List
            component="nav"
            aria-label="predict"
            subheader={<StyledSubheader text={t("admin.control.title")} />}
          >
            <ListItem
              icon={<SupervisedUserCircleIcon sx={{ color: "darkgray" }} />}
              text={t("admin.control.management")}
              selected={selected === 7}
              onClick={() => handleListItemClick(7)}
            />
            <ListItem
              icon={<LogIcon sx={{ color: "white" }} />}
              text={t("admin.control.log")}
              selected={selected === 8}
              onClick={() => handleListItemClick(8)}
            />
          </List>
        </>
      )}
      <Divider />
      <List component="nav" aria-label="profiles">
        {mode === "user" ? (
          <>
            <ListItem
              icon={<UserIcon sx={{ color: "white" }} />}
              text={t("profile")}
              selected={selected === 9}
              onClick={() => handleListItemClick(9)}
            />
            <ListItem
              icon={<HelpOutlineIcon sx={{ color: "darkgray" }} />}
              text={t("help")}
              selected={selected === 10}
              onClick={() => handleListItemClick(10)}
            />
          </>
        ) : (
          <ListItem
            icon={<HelpOutlineIcon sx={{ color: "darkgray" }} />}
            text={t("help")}
            selected={selected === 11}
            onClick={() => handleListItemClick(11)}
          />
        )}
        <LanguageSelect />
      </List>
    </Box>
  );
};

export default Sidebar;
