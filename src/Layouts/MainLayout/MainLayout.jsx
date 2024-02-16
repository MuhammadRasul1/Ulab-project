import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { Sidebar } from "components/Sidebar";
import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const MainLayout = () => {

  return <>
    <Box display="flex" alignItems="start">
      <Sidebar />
      <Box marginLeft="280px" display="flex" flexDirection="column" height="100%" overflow="hidden">
        <Outlet className={cls.outlet} />
      </Box>
    </Box>
  </>;
};
