import { DAIL_TITLE, DAIL_DESCRIPTION, CASE_REDIRECT_DESCRIPTION, OPINION_REDIRECT_DESCRIPTION, LITIGATION_RECS_TITLE, LITIGATION_RECS_DESCRIPTION } from "dail/constants/textVariables";
import SimpleCard from "dail/components/SimpleCard";
import AcknowledgementsCard from "dail/components/AcknowledgementsCard";
import NavBar from "dail/components/Navbar/Navbar";
import "dail/stylesheet.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import DefaultFooter from "dail/components/DefaultFooter";
import etiLogo from "assets/images/etiLogo.jpg";
import routes from "routes";
import footerRoutes from "footer.routes";

const blue = "#003c5a";

function DAILMainPage() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar
        brand={<img src={etiLogo} alt="ETI Logo" style={{ height: 32 }} />}
        routes={routes}
        sticky
      />

      {/* Hero Section */}
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
        <Container sx={{ pt: 0, mt: 10, maxWidth: 1200, width: "100%" }}>
          <Grid container item xs={12} lg={10} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: { fontSize: size["3xl"] },
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
              sx={{ pb: 12 }}
            >
              {DAIL_DESCRIPTION}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>

      {/* Main Card: Acknowledgements and Case/Opinion Cards */}
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.93),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "visible",
        }}
      >
        <Container sx={{ mt: 2, width: "100%" }}>
          {/* Acknowledgements Section */}
          <Box sx={{ mb: 2 }}>
            <AcknowledgementsCard />
          </Box>

          {/* Case & Opinion Section */}
          <Box
            sx={{
              p: 2,
              pb: 3,
              backgroundColor: blue,
              borderRadius: 2,
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              overflow: "visible",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <SimpleCard
                  title="Search by Case Name"
                  description={CASE_REDIRECT_DESCRIPTION}
                  titleColor="white"
                  descriptionColor="white"
                  action={
                    <Button
                      variant="contained"
                      href="/cases/table"
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>}
                      sx={{
                        mt: 2,
                        backgroundColor: "#fff",
                        color: blue,
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: "1rem",
                        "&:hover": { backgroundColor: "#e0e0e0" },
                      }}
                    >
                      Case Database
                    </Button>
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <SimpleCard
                  title="Search by Opinion"
                  description={OPINION_REDIRECT_DESCRIPTION}
                  titleColor="white"
                  descriptionColor="white"
                  action={
                    <Button
                      variant="contained"
                      href="/opinions/table"
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>}
                      sx={{
                        mt: 2,
                        backgroundColor: "#fff",
                        color: blue,
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: "1rem",
                        "&:hover": { backgroundColor: "#e0e0e0" },
                      }}
                    >
                      Opinion Database
                    </Button>
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Card>

      {/* Suggestions Card */}
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
        <Container sx={{ mt: 2, maxWidth: 600 }}>
          <SimpleCard
            title={LITIGATION_RECS_TITLE}
            description={LITIGATION_RECS_DESCRIPTION}
            action={
              <MKTypography
                pt={2}
                component="a"
                href="https://blogs.gwu.edu/law-eti/suggestions-for-the-ai-litigation-database/"
                target="_blank"
                rel="noreferrer"
                variant="body2"
                color={blue}
                fontWeight="bold"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translateX(3px)`,
                    transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },
                  "&:hover .material-icons-round, &:focus .material-icons-round": {
                    transform: `translateX(6px)`,
                  },
                }}
              >
                Contact Form <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </MKTypography>
            }
          />
        </Container>
      </Card>

      {/* Footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default DAILMainPage;