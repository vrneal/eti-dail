import React from "react";
import Container from "@mui/material/Container";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Button from "@mui/material/Button";

const SimpleCard = ({
  title,
  description,
  action,
  titleColor = "inherit",
  descriptionColor = "inherit",
  titleOpacity = 0.93,
  descriptionOpacity = 0.8,
  buttonProps = {},
  buttonOpacity = 0.93,
}) => (
  <Container sx={{ mt: 4, maxWidth: 600 }}>
    <MKBox
      sx={{
        p: 3,
        pt: 0,
        borderRadius: 2,
        textAlign: "left",
        maxWidth: 600,
      }}
    >
      <MKTypography
        variant="h4"
        fontWeight="bold"
        mb={1.5} // Increased margin-bottom for spacing
        color={titleColor}
        sx={{ opacity: titleOpacity }}
      >
        {title}
      </MKTypography>
      <MKTypography
        variant="body1"
        color={descriptionColor}
        sx={{ opacity: descriptionOpacity, mb: 2 }}
      >
        {description}
      </MKTypography>
      {action &&
        React.isValidElement(action)
        ? React.cloneElement(action, {
            sx: { ...(action.props.sx || {}), opacity: buttonOpacity },
            ...buttonProps,
          })
        : action}
    </MKBox>
  </Container>
);

export default SimpleCard;