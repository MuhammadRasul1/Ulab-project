import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { AuthSidebar } from "components/AuthSidebar";

export const AuthLayout = () => {

  return <>
    <Box className={cls.wrapper}>
      <AuthSidebar />
      <Box className={cls.wrapperContent}>
        <Outlet />
      </Box>
    </Box>
  </>;
};
