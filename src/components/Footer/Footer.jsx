import { Box, Icon } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import UserAvatar from "assets/img/icon/userAvatar.svg";

export const Footer = ({auth}) => {

  return(
    <footer className={cls.footer}>
        <Box className={cls.profileWrapper}>
          <Box className={cls.userProfile}>
            <img className={cls.userAvatar} src={UserAvatar} alt="user_avatar" width="32px" height="32px" />
            <Icon className={cls.status} viewBox='0 0 200 200' color='green'>
              <path
                fill='currentColor'
                d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
              />
            </Icon>
          </Box>
          <Box>
            <Box display="flex" alignItems="start">
              <span className={cls.userFirstName}>{auth?.userData?.first_name}</span>
              <span className={cls.userLastName}>{auth?.userData?.last_name}</span>
            </Box>
            <p className={cls.email}>{auth?.userData?.email}</p>
          </Box>
        </Box>
    </footer>
  ) 
};
