import { MdModeEdit } from 'react-icons/md';
import cls from './style.module.scss';
import { Container } from 'components/Container';
import { Box } from '@chakra-ui/react';
import { Button } from 'react-bootstrap';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { authStore } from 'store/auth.store';
export const ProfileHeader = () => {
  const handleLogOut = () => {
    authStore.userData = {};
    authStore.logout();
  };
  return (
    <div className={cls.headerProfile}>
      <Container>
        <div className={cls.headerWrap}>
          <div>
            <p>Профиль</p>
          </div>
          <div className={cls.headerBtn}>
            <button className={cls.editBtn}>
              <MdModeEdit />
            </button>
            <Box>
              <Button marginTop="30px" width="100px" background={'red'} color={'white'} onClick={handleLogOut}>
                <RiLogoutBoxFill />
              </Button>
            </Box>
          </div>
        </div>
      </Container>
    </div>
  );
};
