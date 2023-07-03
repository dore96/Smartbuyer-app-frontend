import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Smart Buyer App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`© ${new Date().getFullYear()} Smart Buyer App By Dor Edelman and Maor Halevi`}

            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;