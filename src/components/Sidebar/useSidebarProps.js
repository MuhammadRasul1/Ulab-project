import Courses from "assets/img/icon/courses.svg";
import UserIcon from "assets/img/icon/usersicon.svg"
import InfoIcon from "assets/img/icon/info.svg";
import Device from "assets/img/icon/devices.svg";

export const useSidebarProps = () => {

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

  return { 
    links,
    auth
   };

};
