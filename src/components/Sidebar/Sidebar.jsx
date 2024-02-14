import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useSidebarProps } from "./useSidebarProps";
import Courses from "assets/img/icon/courses.svg";
import UsersIcon from "assets/img/icon/usersicon.svg"
import { Box } from "@chakra-ui/react";

export const Sidebar = () => {

  const {  } = useSidebarProps();

  return <div className={cls.sidebar}>
    <Box display="flex" alignItems="center" padding="14px 0" justifyContent="space-between" borderBottom="1px solid #E5E9EB">
      <p className={cls.logo}>LMS</p>
      <button className={cls.sidebarBtn} type="button">
        <Box display="flex" flexDirection="column">
          <span></span>
          <span></span>
          <span></span>
        </Box>
        <Box className={cls.leftArrow}>
          <span></span>
          <span></span>
        </Box>
      </button>
    </Box>
    <nav className={cls.navbar}>
      <ul className={cls.navList}>
        <li className={cls.navItem}> 
          <Link className={cls.navLink} to="/courses">
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
  </div>;
};
