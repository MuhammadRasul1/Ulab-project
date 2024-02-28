import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useSidebarProps } from "./useSidebarProps";
import { Box } from "@chakra-ui/react";
import { Footer } from "components/Footer";

export const Sidebar = () => {

  const { auth, links } = useSidebarProps();

  return (
    <Box className={cls.sidebar}>
      <Box className={cls.wrapper}>
        <p className={cls.logo}>LMS</p>
        <button className={cls.sidebarBtn} type="button">
          <Box display="flex" flexDirection="column">
            <span></span>
            <span></span>
            <span></span>
          </Box>
          {/* <Box className={cls.leftArrow}>
            <span></span>
            <span></span>
          </Box> */}
        </button>
      </Box>
      <nav className={cls.navbar}>
        <ul className={cls.navList}>
          {
            links?.map((link) => (
              <li className={cls.navItem}> 
                <Link className={cls.navLink} to={link?.path}>
                  <img src={link?.src} alt={link?.alt} width={20} height={20} />
                  <span className={cls.navText}>{link?.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      <Footer 
        auth={auth}
      />
    </Box>
  )}
