import {
  Box,
  Button,
  FormControl,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LanguageSelect from "Layout/Sidebar/LanguageSelect";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Register = () => {
  const { t } = useTranslation("register");
  return (
    <Box
      minWidth="100%"
      height="100vh"
      bgcolor="superlightgray"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        sx={{
          padding: "60px 120px",
          gap: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
        }}
      >
        <img src={require("assets/logo.png")} alt="logo" />
        <Box sx={{ cursor: "pointer" }}>
          <LanguageSelect />
        </Box>
        <FormControl 
        sx={{
          gap: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "20px",
        }}>
          <Grid container minWidth="640px" spacing={12}>
            <Grid item xs={6} display="flex" flexDirection="column" gap="16px">
              <Box>
                <Typography variant="h5">{t("left.description")}</Typography>
                <Typography variant="body2" color="gray">
                  {t("left.helper")}
                </Typography>
              </Box>
              <TextField
                required
                id="firstName"
                name="firstName"
                label={t("left.firstName")}
                fullWidth
              />
              <TextField
                required
                id="lastName"
                name="lastName"
                label={t("left.lastName")}
                fullWidth
              />
              <TextField
                required
                id="employeeID"
                name="employeeID"
                label={t("left.employeeID")}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} display="flex" flexDirection="column" gap="16px">
              <Box>
                <Typography variant="h5">{t("right.description")}</Typography>
                <Typography variant="body2" color="gray">
                  {t("right.helper")}
                </Typography>
              </Box>
              <TextField
                required
                id="email"
                name="email"
                label={t("right.email")}
                fullWidth
              />
              <TextField
                required
                id="password"
                name="password"
                label={t("right.password")}
                fullWidth
              />
              <TextField
                required
                id="confirmpassword"
                name="confirmpassword"
                label={t("right.confirmPassword")}
                fullWidth
              />
            </Grid>
          </Grid>
          <Box>
        <Button
          color="primary"
          variant="contained"
          fullWidth
          size="large"
        >
          {t("register")}
        </Button>
        <Typography mt={2} color="primary" variant="body2">
          {t("account")} <Link to="/">{t("login")}</Link>
        </Typography>
        </Box>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Register;
