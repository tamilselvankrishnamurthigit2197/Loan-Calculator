import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const ErrorPage = () => {
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
        Something went wrong in the application.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        color="primary"
      >
        Go To Home
      </Button>
    </Box>
  );
};

export default ErrorPage;
