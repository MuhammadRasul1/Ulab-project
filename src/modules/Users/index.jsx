import { StudentHeader } from './StudentPath/StudentHeader';
import { StudentMain } from './StudentPath/StudentMain/index';
import { StudentSaidbar } from './StudentPath/StudentSaidbar/studentSaidbar';
import cls from './style.module.scss';
export const StudentPath = () => {
  return (
    <div>
      <div className={cls.studentWraper}>
        <div>
          <StudentSaidbar />
        </div>
        <div className={cls.mainBody}>
          <StudentHeader />
          <div>
            <StudentMain />
          </div>
        </div>
      </div>
    </div>
  );
};
