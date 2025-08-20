import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2, // spacing between items
        textAlign: "center",
      }}
    >
      <Typography variant="h5">
        Render Page : <a href="https://loan-calculator-wfba.onrender.com/"> Loan Calculator live </a>
      </Typography>

    </Box>
  );
};

export default About;
