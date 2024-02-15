import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Sidebar } from "components/Sidebar";
import { Box } from "@chakra-ui/react";

export const MainLayout = () => {

  return <>
    <Box display="flex" alignItems="start">
      <Sidebar />
      <Box display="flex" flexDirection="column">
        <Header />
        <Outlet />
      </Box>
    </Box>
    <Footer />
  </>;
};
