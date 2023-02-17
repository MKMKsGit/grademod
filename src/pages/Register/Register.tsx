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
import { Link } from "react-router-dom";
const Register = () => {
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
        <Box>
          <LanguageSelect />
        </Box>
        <FormControl>
          <Grid container minWidth="640px" spacing={12}>
            <Grid item xs={6} display="flex" flexDirection="column" gap="16px">
              <Box>
                <Typography variant="h5">User Information</Typography>
                <Typography variant="body2" color="gray">
                  Please fill in your information
                </Typography>
              </Box>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                fullWidth
              />
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                fullWidth
              />
              <TextField
                required
                id="employeeID"
                name="employeeID"
                label="Employee / Student ID"
                fullWidth
              />
              <TextField
                id="telephone"
                name="telephone"
                label="Telephone"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} display="flex" flexDirection="column" gap="16px">
              <Box>
                <Typography variant="h5">Login Information</Typography>
                <Typography variant="body2" color="gray">
                  Please fill in to create account
                </Typography>
              </Box>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                fullWidth
              />
              <TextField
                required
                id="password"
                name="password"
                label="Password"
                fullWidth
              />
              <TextField
                required
                id="confirmpassword"
                name="confirmpassword"
                label="Confirm Password"
                fullWidth
              />
            </Grid>
          </Grid>
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          sx={{ width: "100%" }}
          size="large"
        >
          Register
        </Button>
        <Typography color="primary" variant="body2">
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
