import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CREDITS_RESEARCH_WRITING, CREDITS_TRAILS } from "dail/constants/textVariables";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

const blue = "#003c5a";

function AcknowledgementsCard() {
  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={0}
      py={3}
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Container>
        <Grid container item xs={10}>
          <MKTypography variant="h4" color={blue} fontWeight="bold" sx={{ pb: 2 }}>
            Research Team and Acknowledgements
          </MKTypography>
          <MKTypography variant="body1" color={blue} opacity={0.8} mb={2}>
            {CREDITS_RESEARCH_WRITING}
          </MKTypography>
          <MKTypography variant="body1" color={blue} opacity={0.8} mb={2}>
            {CREDITS_TRAILS}
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AcknowledgementsCard;