import { DETAILS_PAGE_DESCRIPTION } from "dail/constants/textVariables";
import NavBar from "dail/components/Navbar/Navbar";
import { useEffect, useRef } from "react";
import "dail/stylesheet.css";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultFooter from "dail/components/DefaultFooter";
import etiLogo from "assets/images/etiLogo.jpg";
import routes from "routes";
import footerRoutes from "footer.routes";
import SectionCard from "dail/components/CaseDetailsSectionCard";

function OpinionsDetails() {
  const titleRef = useRef(null);
  const mainEmbedRef = useRef(null);
  const documentsRef = useRef(null);
  const secondaryRef = useRef(null);

  useEffect(() => {
    // Blue title section - opinions
    if (titleRef.current) {
      titleRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://c7amf338.caspio.com/dp/c2bb90004ec6a343613949c7adc4/emb";
      titleRef.current.appendChild(script);
    }
    // Main opinion details
    if (mainEmbedRef.current) {
      mainEmbedRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://c7amf338.caspio.com/dp/c2bb9000cc7641e78ec643689ec1/emb";
      mainEmbedRef.current.appendChild(script);
    }
    // Documents
    if (documentsRef.current) {
      documentsRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://c7amf338.caspio.com/dp/c2bb900034d9eb7be0d844239af0/emb";
      documentsRef.current.appendChild(script);
    }

    //add a case link w/ pid to redirect to the case page

    // Secondary Resources (to add later when added in caspio)
    // if (secondaryRef.current) {
    //   secondaryRef.current.innerHTML = "";
    //   const script = document.createElement("script");
    //   script.type = "text/javascript";
    //   script.src = "https://c7amf338.caspio.com/dp/c2bb90006d0bff7f6a964259895f/emb";
    //   secondaryRef.current.appendChild(script);
    // }
    // Updates the page tab with the case title
    let attempts = 0;
    const maxAttempts = 10;
    const intervalId = setInterval(() => {
      const captionElement = document.querySelector(".cbFormData");
      if (captionElement && captionElement.innerText) {
        const caseTitle = captionElement.innerText.trim();
        document.title = `${caseTitle} – Case Detail | GW Law ETI AI Litigation Database`;
        clearInterval(intervalId);
      }
      attempts += 1;
      if (attempts >= maxAttempts) clearInterval(intervalId);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {/* Inline style to force white, bold title in the title bar */}
      <style>
        {`
          .case-title-bar .cbFormData {
        color: #fcfdfd !important;
        font-weight: bold !important;
        line-height: 1.2 !important;
      }
      .case-title-bar > div {
        margin-top: 0 !important;
        width: auto !important;
      }
        `}
      </style>
      <NavBar
        brand={<img src={etiLogo} alt="ETI Logo" style={{ height: 32 }} />}
        routes={routes}
        sticky
      />
      <MKBox
        minHeight="40vh"
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
        <Container sx={{ pt: 0, mt: 10, maxWidth: 1200, width: "100%" }}>
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
              {/* Optionally add a page heading here */}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={0}
              mt={8}
              mb={6}
              sx={{ pb: 12 }}
            >
              {DETAILS_PAGE_DESCRIPTION}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 0,
          mx: "auto",
          mt: -9.1,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main),
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
          overflow: "visible",
          width: "fit-content",
          
        }}
      >
        {/* Title bar flush with top and full width */}
        <div
          className="case-title-bar"
          style={{
            backgroundColor: "#027faa",
            width: "100%",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            padding: "16px 24px",
            margin: 0,
            //marginTop: "-8px",
            boxSizing: "border-box",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div ref={titleRef} />
        </div>
        <Container sx={{ mt: 0, width: "100%", p: 2 }}>
          <div style={{ backgroundColor: "#fff", padding: 16, borderRadius: 8 }}>
            <div ref={mainEmbedRef} />
            <SectionCard title="Document">
              <div ref={documentsRef} />
            </SectionCard>
      
            <br /><br /><br /><br />
          </div>
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default OpinionsDetails;