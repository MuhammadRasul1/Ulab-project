import cls from './Saidbar.module.scss';
import VdiyoIcon from 'assets/img/icon/play_circle.svg';
import LockiyoIcon from 'assets/img/icon/lock.svg';
import BookIcon from 'assets/img/icon/book.svg';
import QuizIcon from 'assets/img/icon/quiz.svg';
import Chevron from 'assets/img/icon/expand_more.svg';
export const SaidbarFundamental = () => {
  return (
    <div className={cls.saidbarFundamentals}>
      <div className={cls.aboutCourse}>
        <div className={cls.mainlyCorse}>
          <p className={cls.mainlyTitle}>Основы биологии</p>
          <button>
            <img src={Chevron} alt="Chevron" />
          </button>
        </div>
        <div className={cls.wrapVD}>
          <div className={cls.aboutVD}>
            <img src={VdiyoIcon} alt="" />
            <p>Введение в клеточное дыхание</p>
          </div>
          <p>12 минут</p>
        </div>
        <div className={cls.wrapVD}>
          <div className={cls.aboutVD}>
            <img src={QuizIcon} alt="" />
            <p>Введение в клеточное дыхание</p>
          </div>
          <p>12 минут</p>
        </div>
        <div className={cls.wrapVD}>
          <div className={cls.aboutVD}>
            <img src={BookIcon} alt="" />
            <p>Введение в клеточное дыхание</p>
          </div>
          <p>12 минут</p>
        </div>
      </div>
      {/* <div></div> */}
      <div className={cls.aboutVidyoCourse}>
        <div className={cls.mainlyCorse}>
          <p className={cls.mainlyTitle}> Клеточное дыхание</p>
          <button>
            <img src={Chevron} alt="Chevron" />
          </button>
        </div>
        <div className={cls.wrapVD}>
          <div className={cls.aboutVD}>
            <img src={LockiyoIcon} alt="" />
            <p>Окисление пирувата и цикл ли...</p>
          </div>
          <p>12 минут</p>
        </div>
      </div>
    </div>
  );
};
