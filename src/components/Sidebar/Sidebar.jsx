import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useSidebarProps } from "./useSidebarProps";
import Courses from "assets/img/icon/courses.svg";
import UsersIcon from "assets/img/icon/usersicon.svg"
import { Box, Icon } from "@chakra-ui/react";
import UserAvatar from "assets/img/icon/userAvatar.svg";

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
          <li className={cls.navItem}> 
            <Link className={cls.navLink} to="admin/courses">
              <img src={Courses} alt="courses" width={20} height={20} />
              <span className={cls.navText}>Курсы</span>
            </Link>
          </li>  
          <li className={cls.navItem}> 
            <Link className={cls.navLink} to="admin/users">
              <img src={UsersIcon} alt="UsersIcon" width={20} height={20} />
              <span className={cls.navText}>Пользователи</span>
            </Link>
          </li>  
        </ul>
      </nav>
      <Box>
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
      </Box>
    </Box>
  )
};
