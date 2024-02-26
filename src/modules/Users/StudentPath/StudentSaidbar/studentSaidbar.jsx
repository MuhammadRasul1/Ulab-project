import coursImg from 'assets/img/icon/local_library.svg';
import clockLOder from 'assets/img/icon/clock_loader_10.svg';
import cls from './style.module.scss';
// import { SaidbarFooter } from '../SaidbarFooter';
import { Link } from 'react-router-dom';
import UserNameImg from 'assets/img/icon/userAvatar.svg';
import ErroIcon from 'assets/img/icon/arrow_drop_down.svg';
export const StudentSaidbar = () => {
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
        <div className={cls.SaidbarFooterWrap}>
          <div className={cls.FooterWraper}>
            <div className={cls.userImgWrap}>
              <img src={UserNameImg} alt="" />
            </div>
            <p className={cls.userName}> UserSourName</p>
            <button className={cls.btn}>
              <img src={ErroIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
