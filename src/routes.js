import Icon from "@mui/material/Icon";
import EmailIcon from "@mui/icons-material/Email";
import RA_Dashboard from "dail/pages/HeaderItems/Researcher Dashboard/Dashboard";

const routes = [
  {
    name: "About",
    icon: <Icon>info</Icon>,
    collapse: [
      {
        name: "Ethical Tech Initiative",
        icon: <Icon>view_day</Icon>,
        href: "https://blogs.gwu.edu/law-eti/",
        target: "_blank",
        rel: "noopener",
      },
      {
        name: "AI Litigation Project",
        icon: <Icon>gavel</Icon>,
        href: "https://blogs.gwu.edu/law-eti/ai-litigation-project/",
        target: "_blank",
        rel: "noopener",
      },
    ],
  },
  {
    name: "Contact Us",
    icon: <EmailIcon />,
    href: "https://blogs.gwu.edu/law-eti/suggestions-for-the-ai-litigation-database/",
    target: "_blank",
    rel: "noopener",
  },
  {
    name: "Researcher Dashboard",
    icon: <Icon>dashboard</Icon>,
    route: "/researcher/dashboard",
    key: "dashboard",
    component: <RA_Dashboard />,
  },
];

export default routes;