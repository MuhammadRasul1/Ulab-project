import { Link } from "react-router-dom";
import cls from "./styles.module.scss";
import { useSidebarProps } from "./useSidebarProps";
import Courses from "assets/img/icon/courses.svg";
import UsersIcon from "assets/img/icon/usersicon.svg"
import Logo from "assets/img/icon/logo.svg";
import { Box } from "@chakra-ui/react";

export const Sidebar = () => {

  const {  } = useSidebarProps();

  return <div className={cls.sidebar}>
    <Box display="flex" alignItems="center" borderBottom="1px solid #E5E9EB">
      <img src={Logo} alt="Sofia" width={66} height={28} />
      <button className={cls.sidebarBtn} type="button">
        
      </button>
    </Box>
    <nav className={cls.navbar}>
      <ul className={cls.navList}>
        <li className={cls.navItem}> 
          <Link to="/courses">
            <img src={Courses} alt="courses" width={20} height={20} />
            Курсы
          </Link>
        </li>  
        <li className={cls.navItem}> 
          <Link to="admin/users">
            <img src={UsersIcon} alt="UsersIcon" width={20} height={20} />
            Users
          </Link>
        </li>  
      </ul>
    </nav>
  </div>;
};
