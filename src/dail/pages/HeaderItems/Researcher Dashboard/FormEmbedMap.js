import React, { useEffect, useRef } from "react";
import MKTypography from "components/MKTypography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

// Map route param to embed info
const EMBED_MAP = {
  "new-case": {
    title: "New Case Entry",
    description:
      "This page allows you to enter new case details into the database. Please fill out all required fields. If you don’t find the necessary options in the Area of Application, Cause of Action, or Issues dropdowns, please visit the respective data entry pages to add them. We will review and include them in the dropdown list, enabling you to complete your entry.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000897fac2e511b46edb9b3/emb",
    maxWidth: 800,
  },
  "update-case": {
    title: "Update Existing Case",
    description:
      "This page allows you to update existing case details in the database. Please fill out all required fields. If you don’t find the necessary options in the Area of Application, Cause of Action, or Issues dropdowns, please visit the respective data entry pages to add them. We will review and include them in the dropdown list, enabling you to complete your entry.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000b90232f807354b6889ce/emb",
    maxWidth: 800,
  },
  "new-docket": {
    title: "New Docket Entry",
    description:
      "This page allows you to enter new docket details for a case. Please fill out the court, docket number, and link fields, and submit the form. You can add as many dockets as needed, one at a time.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000a486b5862d6240a0bd34/emb",
    maxWidth: 800,
  },
  "update-docket": {
    title: "Update Existing Docket Entry",
    description:
      "This page allows you to update existing docket details for a case. Please update the court, docket number, or link fields, and submit the form.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000f3179ca96bc64087aa16/emb",
    maxWidth: 800,
  },
  "new-document": {
    title: "New Document Entry",
    description:
      "This page allows you to enter new document details for a case. Please fill out the document name, date, link, and cite or reference fields, and submit the form. You can add as many documents as needed, one at a time.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb900008b6e2206bd9419e8d1c/emb",
    maxWidth: 900,
  },
  "update-document": {
    title: "Update Existing Document Entry",
    description:
      "This page allows you to update existing document details for a case. Please update the document name, date, link, and cite or reference fields, and submit the form.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000055481542048446981b9/emb",
    maxWidth: 1000,
  },
  "new-secondary": {
    title: "New Secondary Source Entry",
    description:
      "This page allows you to add new secondary source details for a case. Please enter the secondary source title and hyperlink, then submit the form. You can add multiple sources one at a time.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb90008ae52fdde34441bc912d/emb",
    maxWidth: 800,
  },
  "update-secondary": {
    title: "Update Existing Secondary Resource Entry",
    description:
      "This page allows you to update existing secondary source details for a case. Please update the secondary source title or hyperlink, then submit the form to save changes.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000d25d6523995f47658a90/emb",
    maxWidth: 800,
  },
  // --- Opinion Data Entry & Management ---
  "new-opinion": {
    title: "New Opinion Entry",
    description:
      "This page allows you to enter new opinion details into the database. Please fill out all required fields and submit the form.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb900034d37c5290554ba494b1/emb",
    maxWidth: 800,
  },
  "update-opinion": {
    title: "Update Existing Opinion Entry",
    description:
      "This page allows you to update existing opinion details in the database. Please update the necessary fields and submit the form.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000547ccac82ee049528ba6/emb",
    maxWidth: 800,
  },
  "opinion-document": {
    title: "Add Document to Opinion",
    description:
      "This page allows you to add a document to an existing opinion. Please fill out the required fields and submit the form.",
    embedUrl: "https://c7amf338.caspio.com/dp/c2bb9000980439514dfe4cd4b8ad/emb",
    maxWidth: 800,
  },
};

function FormEmbedPage() {
  const { formType } = useParams();
  const embedRef = useRef(null);

  const formInfo = EMBED_MAP[formType];

  useEffect(() => {
    if (formInfo && embedRef.current) {
      embedRef.current.innerHTML = "";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = formInfo.embedUrl;
      embedRef.current.appendChild(script);
    }
  }, [formInfo]);

  if (!formInfo) {
    return (
      <Container sx={{ mt: 8 }}>
        <MKTypography variant="h3" color="error" align="center">
          Form not found.
        </MKTypography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 8, mb: 8 }}>
      <MKTypography variant="h2" align="center" mb={2} fontWeight="bold">
        {formInfo.title}
      </MKTypography>
      <MKTypography variant="body1" align="center" mb={4}>
        {formInfo.description}
      </MKTypography>
      <Box
        className="form-container"
        sx={{
          width: "100%",
          maxWidth: formInfo.maxWidth || 800,
          margin: "0 auto",
          backgroundColor: "white",
          p: 5,
          borderRadius: 2,
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <Box
          className="center-content"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div ref={embedRef} style={{ width: "100%" }} />
        </Box>
      </Box>
    </Container>
  );
}

export default FormEmbedPage;