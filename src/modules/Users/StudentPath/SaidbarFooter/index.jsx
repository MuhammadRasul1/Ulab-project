import cls from './styles.module.scss';
import UserNameImg from 'assets/img/icon/userAvatar.svg';
import ErroIcon from 'assets/img/icon/arrow_drop_down.svg';
export const SaidbarFooter = () => {
  return (
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
  );
};
