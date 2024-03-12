import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { Box } from "@chakra-ui/react";
import { Footer } from "components/Footer";
import Courses from "assets/img/icon/courses.svg";
import UserIcon from "assets/img/icon/usersicon.svg"
import InfoIcon from "assets/img/icon/info.svg";
import Device from "assets/img/icon/devices.svg";
import Reports from "assets/img/icon/reports.svg";
import GroupsIcon from "assets/img/icon/groupsIcon.svg";
import DashbordIcon from "assets/img/icon/DashboardIcon.svg";

export const Sidebar = () => {
  
  const links = [
    {
      title: "Дашборд",
      path: "admin/dashbord",
      src: DashbordIcon,
      alt: "dashbordIcon",
    },
    {
      title: "Курсы",
      path: "admin/courses",
      src: Courses,
      alt: "Courses",
    },
    {
      title: "Группы",
      path: "admin/groups",
      src: GroupsIcon,
      alt: "Группы",
    },
    {
      title: "Ученики",
      path: "admin/users",
      src: UserIcon,
      alt: "UserIcon",
    },
    {
      title: "Менторы",
      path: "admin/mentors",
      src: UserIcon,
      alt: "UserIcon",
    },
    {
      title: "Отчеты",
      path: "admin/reports",
      src: Reports,
      alt: "отчеты",
    },
    {
      title: "Профиль",
      path: "admin/profile",
      src: InfoIcon,
      alt: "InfoIcon",
    },
    {
      title: "Устройство",
      path: "admin/device",
      src: Device,
      alt: "Device",
    },
  ]

  const auth = JSON.parse(localStorage.getItem("auth"));

  return (
    <Box className={cls.sidebar}>
      <Box className={cls.wrapper}>
        <a className={cls.logo} href="">LMS</a>
        <button className={cls.sidebarBtn} type="button">
          <Box display="flex" flexDirection="column">
            <span></span>
            <span></span>
            <span></span>
          </Box>
        </button>
      </Box>
      <nav className={cls.navbar}>
        <ul className={cls.navList}>
          {
            links?.map((link, index) => (
              <li className={cls.navItem} key={index}> 
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
