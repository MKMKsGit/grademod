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
  return (
    <Box sx={{ height: "100%", width: "206px", bgcolor: "Background.paper" }}>
      <ModeSwitch />
      <List component="nav" aria-label="mainpage and database">
        <ListItem
          icon={<DashboardIcon sx={{ color: "darkgray" }} />}
          text="หน้าหลัก"
        />
        <ListItem
          icon={<DatabaseIcon sx={{ color: "white" }} />}
          text="ฐานข้อมูล"
        />
      </List>
      <List
        component="nav"
        aria-label="reports"
        subheader={<StyledSubheader text="รายงานสรุป" />}
      >
        <ListItem
          icon={<SchoolIcon sx={{ color: "darkgray" }} />}
          text="สถานศึกษาก่อนรับเข้า"
        />
        <ListItem
          icon={<HonorIcon sx={{ color: "darkgray" }} />}
          text="เกียรตินิยม"
        />
        <ListItem
          icon={<StudentIcon sx={{ color: "white" }} />}
          text="นักศึกษารายบุคคล"
        />
      </List>
      <List
        component="nav"
        aria-label="predict"
        subheader={<StyledSubheader text="การพยากรณ์" />}
      >
        <ListItem
          icon={<StarIcon sx={{ color: "darkgray" }} />}
          text="การได้รับเกียรตินิยม"
        />
        <ListItem
          icon={<NotebookIcon sx={{ color: "darkgray" }} />}
          text="สถานภาพทางการศึกษา"
        />
      </List>
      <Divider />
      <List component="nav" aria-label="profiles">
        <ListItem
          icon={<UserIcon sx={{ color: "white" }} />}
          text="โปรไฟล์ของฉัน"
        />
        <ListItem
          icon={<HelpOutlineIcon sx={{ color: "darkgray" }} />}
          text="คู่มือการใช้งาน"
        />
        <LanguageSelect />
      </List>
    </Box>
  );
};

export default Sidebar;
