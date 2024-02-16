import coursImg from 'assets/img/icon/local_library.svg';
import clockLOder from 'assets/img/icon/clock_loader_10.svg';
import cls from './style.module.scss';
import { SaidbarFooter } from '../SaidbarFooter';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { authStore } from 'store/auth.store';
export const StudentSaidbar = () => {
  const handleLogOut = () => {
    authStore.userData = {}
    authStore.logout()
  }
  return (
    <div className={cls.sidbarWrap}>
      <div className={cls.sidbarTop}>
        <div className={cls.LMS}>
          <p>LMS</p>
        </div>
        <div className={cls.sidbarCours}>
          <img src={coursImg} alt="" />
          <Link>
            {' '}
            <p>Курсы</p>
          </Link>
        </div>
        <div className={cls.sidbarExzam}>
          <img src={clockLOder} alt="" />
          <Link>
            {' '}
            <p>Экзамен</p>
          </Link>
        </div>
        <div className={cls.line}></div>
        <Button background={"red"} color={"white"} onClick={handleLogOut}>LOG OUT</Button>
      </div>
      <SaidbarFooter />
    </div>
  );
};
