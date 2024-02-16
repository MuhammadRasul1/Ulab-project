import notificationIcon from 'assets/img/icon/notifications.svg';
import chat_bubblIcon from 'assets/img/icon/chat_bubble.svg';
import cls from './styles.module.scss';
import { Link } from 'react-router-dom';
export const StudentHeader = () => {
  return (
    <div className={cls.headerWrap}>
      <div className={cls.headerPart1}>
        <Link>
          <div className={cls.haderText}>
            <p className={cls.kindSpheres}>What is IT, and what kind of spheres is in IT?</p>
            <p className={cls.AboutINformation}>Get glimps of information about IT in order to choose sphere</p>
            <button className={cls.btn}>Explore now</button>
          </div>
        </Link>
      </div>
      <div className={cls.headerIcons}>
        <button>
          <img src={notificationIcon} alt="" />
        </button>
        <button>
          <img src={chat_bubblIcon} alt="" />
        </button>
      </div>
    </div>
  );
};
