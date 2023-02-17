import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import LandingPic from "assets/pics/landing.svg";
import { Link } from "react-router-dom";

const Landing = () => {
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
        <FormControl sx={{ mt: 10, width: "100%", gap: 4 }}>
          <TextField required label="Email" variant="outlined" />
          <TextField required label="Password" variant="outlined" />
          <Box width="100%" display="flex" justifyContent="flex-end">
            <Link to="/forgetpassword">
              <Typography variant="subtitle2">forgat password?</Typography>
            </Link>
          </Box>
          <Button variant="contained" sx={{ width: "100%" }} size="large">
            Login
          </Button>
          <Box width="100%" display="flex" justifyContent="center">
            <Link to="/register">
              <Typography variant="body2">
                Not Member? Click me to register!
              </Typography>
            </Link>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Landing;
