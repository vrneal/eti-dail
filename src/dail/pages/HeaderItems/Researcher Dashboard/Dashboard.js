/* eslint-disable no-param-reassign */
/*

Dashboard for researchers

*/
import { RESEARCHER_DASHBOARD_DESCRIPTION, RESEARCHER_DASHBOARD_TITLE } from "dail/constants/textVariables";
import NavBar from "dail/components/Navbar/Navbar";
import "dail/stylesheet.css";

// @mui/material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";

// Material Kit 2 React examples
import DefaultFooter from "dail/components/DefaultFooter";

import etiLogo from "assets/images/etiLogo.jpg";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import { Dashboard } from "@mui/icons-material";

const blue = "#003c5a";

// Map for button label and route
const CASE_BUTTONS = [
  {
    label: "Add New Case",
    to: "/form/new-case",
  },
  {
    label: "Update Existing Case",
    to: "/form/update-case",
  },
  {
    label: "Add Docket to Case",
    to: "/form/new-docket",
  },
  {
    label: "Update Existing Docket",
    to: "/form/update-docket",
  },
  {
    label: "Add Document to Case",
    to: "/form/new-document",
  },
  {
    label: "Update Existing Document",
    to: "/form/update-document",
  },
  {
    label: "Add Secondary Source to Case",
    to: "/form/new-secondary",
  },
  {
    label: "Update Secondary Source",
    to: "/form/update-secondary",
  },
];

const OPINION_BUTTONS = [
  {
    label: "Add New Opinion",
    to: "/form/new-opinion",
  },
  {
    label: "Update Existing Opinion",
    to: "/form/update-opinion",
  },
  {
    label: "Add Document to Opinion",
    to: "/form/opinion-document",
  },
  {
    label: "Update Existing Opinion Document",
    to: "/form/update-opinion-document",
  },
];

function RA_Dashboard() {
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
          backgroundColor: blue,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          sx={{
            pt: 0,
            mt: 10,
            maxWidth: 1200,
            width: "100%",
          }}
        >
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
              {RESEARCHER_DASHBOARD_TITLE}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={0}
              mt={2}
              sx={{ pb: 8 }}
            >
              {RESEARCHER_DASHBOARD_DESCRIPTION}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      {/* Case Data Entry & Management Card */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "visible",
        }}
      >
        <Container sx={{ mt: 4, height: "100%", width: "100%" }}>
          <MKTypography
            variant="h4"
            fontWeight="bold"
            align="center"
            mb={3}
            sx={{ color: blue }}
          >
            Case Data Entry & Management
          </MKTypography>
          <Box sx={{ width: "100%", mb: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              {CASE_BUTTONS.map((btn) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={btn.label}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    component={Link}
                    to={btn.to}
                    variant="contained"
                    endIcon={<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>}
                    sx={{
                      backgroundColor: blue,
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.22rem",
                      textTransform: "none",
                      borderRadius: 2,
                      boxShadow: "none",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "#00263a",
                      },
                      py: 1.1,
                      minWidth: 0,
                      width: { xs: "98%", sm: "85%", md: "75%" },
                      mx: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {btn.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Card>

      {/* Opinion Data Entry & Management Card */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "visible",
        }}
      >
        <Container sx={{ mt: 4, height: "100%", width: "100%" }}>
          <MKTypography
            variant="h4"
            fontWeight="bold"
            align="center"
            mb={3}
            sx={{ color: blue }}
          >
            Opinion Data Entry & Management
          </MKTypography>
          <Box sx={{ width: "100%", mb: 4 }}>
            <Grid container spacing={2} justifyContent="center">
              {OPINION_BUTTONS.map((btn) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={btn.label}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    component={Link}
                    to={btn.to}
                    variant="contained"
                    endIcon={<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>}
                    sx={{
                      backgroundColor: blue,
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.22rem",
                      textTransform: "none",
                      borderRadius: 2,
                      boxShadow: "none",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "#00263a",
                      },
                      py: 1.1,
                      minWidth: 0,
                      width: { xs: "98%", sm: "85%", md: "75%" },
                      mx: "auto",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {btn.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Card>

      {/* footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default RA_Dashboard;