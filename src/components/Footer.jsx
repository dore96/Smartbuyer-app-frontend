import React from "react";
import { Box, Container, Grid, Typography} from "@mui/material";
import SiteMap from "./SiteMap";

export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center" spacing={2}>
                    {/* Footer title */}
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="h6" align="center">
                            Smart Buyer App
                        </Typography>
                    </Grid>
                    {/*Site Map*/}
                    <SiteMap/>
                    {/* Footer subtitle */}
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="body2" align="center">
                            {`© ${new Date().getFullYear()} Smart Buyer App By Dor Edelman and Maor Halevi`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
