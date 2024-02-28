import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useSidebarProps } from "./useSidebarProps";
import Courses from "assets/img/icon/courses.svg";
import UserIcon from "assets/img/icon/usersicon.svg"
import { Box, Icon } from "@chakra-ui/react";
import UserAvatar from "assets/img/icon/userAvatar.svg";
import InfoIcon from "assets/img/icon/info.svg";
import Device from "assets/img/icon/devices.svg";


const links = [
  {
    title: "Курсы",
    path: "admin/courses",
    src: Courses,
    alt: "Courses",
  },
  {
    title: "Пользователи",
    path: "admin/users",
    src: UserIcon,
    alt: "UserIcon",
  },
  {
    title: "Данные",
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

export const Sidebar = () => {

  const { auth } = useSidebarProps();

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
      <footer className={cls.footer}>
        <Box className={cls.profileWrapper}>
          <Link className={cls.userProfile} to="admin/profile">
            <img className={cls.userAvatar} src={UserAvatar} alt="user_avatar" width="32px" height="32px" />
            <Icon className={cls.status} viewBox='0 0 200 200' color='green'>
              <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
              />
            </Icon>
          </Link>
          <Box>
            <Box display="flex" alignItems="start">
              <span className={cls.userFirstName}>{auth?.userData?.first_name}</span>
              <span className={cls.userLastName}>{auth?.userData?.last_name}</span>
            </Box>
            <p className={cls.email}>{auth?.userData?.email}</p>
          </Box>
        </Box>
      </footer>
    </Box>
  )}
