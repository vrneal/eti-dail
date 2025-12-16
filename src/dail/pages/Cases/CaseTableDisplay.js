/* 

Main DAIL Case Display Page.

*/

import { DAIL_TITLE, CASE_DATABASE_DESCRIPTION} from "dail/constants/textVariables";
import NavBar from "dail/components/Navbar/Navbar";

import { useEffect } from "react";
import "dail/stylesheet.css";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultFooter from "dail/components/DefaultFooter";

import etiLogo from "assets/images/etiLogo.jpg";


// Routes
import routes from "routes";
import footerRoutes from "footer.routes";


function DAILMainPage() {
  useEffect(() => {
    const container = document.getElementById("ai-lit-db-embed");
    container.innerHTML = "";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://c7amf338.caspio.com/dp/c2bb90001d65164cde294f478c2a/emb";
    container.appendChild(script); 
  }, []);

  return (
    <>
    <NavBar
          brand={<img src={etiLogo} alt="ETI Logo" style={{ height: 32 }} />}
          routes={routes}
          sticky
        />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundColor: "#003c5a",
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ 
          pt: 0, 
          mt: 10, // <-- Add this line (adjust value as needed)
          maxWidth: 1200, // Match this to your Card's maxWidth if set
          width: "100%",}}>
          <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
                {DAIL_TITLE}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={0}
              mt={2}
              sx={{ pb: 12 }} // <-- Add this line for bottom padding
            >
            {CASE_DATABASE_DESCRIPTION}

            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "visible", // allow overflow if needed
        }}
      >
        <Container sx={{ mt: 4, height: "100%", width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              minWidth: 0,
              minHeight: 0,
              overflowX: "auto", // allow horizontal scroll if needed
              display: "block",
            }}
          >
            <div
              className="ai_lit_db"
              id="ai-lit-db-embed"
              style={{
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                flex: 1,
              }}
            />
          </Box>
        </Container>
        <Container sx={{ mt: 2, maxWidth: 600 }}>
</Container>
</Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default DAILMainPage;
