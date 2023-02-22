import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import LandingPic from "assets/pics/landing.svg";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
  const [changePassword, setChangePassword] = useState(true);
  const { t, i18n } = useTranslation("login");
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      m="0 auto"
      gap="100px"
    >
      <img alt="landing pic" src={LandingPic} width="675px" />
      <Box display="flex" flexDirection="column">
        <img alt="logo pic" src={require("assets/logo.png")} width="286px" />
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          onClick={() => {
            i18n.changeLanguage(i18n.language === "th" ? "en" : "th");
          }}
        >
          <Typography
            variant="subtitle2"
            color="primary"
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            {t("changeLanguage")}
          </Typography>
        </Box>
        {changePassword ? (
          <FormControl sx={{ mt: 10, width: "100%", gap: 4 }}>
            <TextField required label={t("email")} variant="outlined" />
            <TextField required label={t("password")} variant="outlined" />
            <Box width="100%" display="flex" justifyContent="flex-end">
              <Box
                onClick={() => {
                  setChangePassword(false);
                }}
              >
                <Typography
                  variant="subtitle2"
                  color="primary"
                  sx={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  {t("forgotPassword")}
                </Typography>
              </Box>
            </Box>
            <Button
              onClick={() => navigate("/user/1")}
              variant="contained"
              sx={{ width: "100%" }}
              size="large"
            >
              {t("login")}
            </Button>
            <Box width="100%" display="flex" justifyContent="center">
              <Link to="/register">
                <Typography variant="body2">{t("register")}</Typography>
              </Link>
            </Box>
          </FormControl>
        ) : (
          <FormControl sx={{ mt: 10, width: "100%", gap: 4 }}>
            <TextField required label={t("email")} variant="outlined" />
            <Button variant="contained" sx={{ width: "100%" }} size="large">
              {t("send")}
            </Button>
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              onClick={() => {
                setChangePassword(true);
              }}
            >
              <Typography
                variant="subtitle2"
                color="primary"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {t("back")}
              </Typography>
            </Box>
          </FormControl>
        )}
      </Box>
    </Box>
  );
};

export default Landing;
