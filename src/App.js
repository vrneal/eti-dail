import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";

import DAILMainPage from "dail/pages/MainDAILPage";
import DetailsPage from "dail/pages/Cases/DetailsPage";
import OpinionsTableDisplay from "dail/pages/Opinions/OpinionTableDisplay";
import OpinionsDetails from "dail/pages/Opinions/OpinionsDetails";
import CaseTableDisplay from "dail/pages/Cases/CaseTableDisplay";
import RA_Dashboard from "dail/pages/HeaderItems/Researcher Dashboard/Dashboard";
import FormEmbedMap from "dail/pages/HeaderItems/Researcher Dashboard/FormEmbedMap";
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/" element={<DAILMainPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/cases/table" element={<CaseTableDisplay />} />
        <Route path="/opinions/table" element={<OpinionsTableDisplay />} />
        <Route path="/opinions/details" element={<OpinionsDetails />} />
        <Route path="/researcher/dashboard" element={<RA_Dashboard/>} />
        <Route path="/form/:formType" element={<FormEmbedMap />} />

      </Routes>
    </ThemeProvider>
  );
}
