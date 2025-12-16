import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import MKTypography from "components/MKTypography";

function SectionCard({ title, children }) {
  return (
    <Card
      sx={{
        my: 2,
        py: 3,
        px: 2,
        borderRadius: "xl",
        backgroundColor: "#003c5a",
        color: "white",
        boxShadow: 3,
      }}
    >
      <Container>
        {title && (
          <MKTypography variant="h5" color="white" fontWeight="bold" sx={{ mb: 2 }}>
            {title}
          </MKTypography>
        )}
        {children}
      </Container>
    </Card>
  );
}

export default SectionCard;