import cls from './styles.module.scss';
import { ProfileHeader } from './ProfileHeader/profile';
import { Container } from 'components/Container';
import { Link } from 'react-router-dom';
export const Profile = () => {
  const GetItems = localStorage.getItem('auth');
  const userData = JSON.parse(GetItems);
  console.log(userData.userData);

  return (
    <div className={cls.ProfilPath}>
      <ProfileHeader />
      <Container>
        <div className={cls.WraperProfilePath}>
          <div className={cls.haderBoxColor}></div>
          <div className={cls.wraperData}>
            <div className={cls.haderImg}>
              <div className={cls.imgWraper}>
                <img src={userData.userData.last_name} alt="no foto" />
              </div>
              <Link>
                <button className={cls.changeData}>Изменить данные</button>
              </Link>
            </div>
            <div className={cls.userInfo}>
              <p className={cls.titleUserINfo}>Ф.И.О</p>
              <p className={cls.bakendInfo}>{userData.userData.last_name}</p>
              <p className={cls.titleUserINfo}>Телефон номера</p>
              <p className={cls.bakendInfo}> {userData.userData.phone_number}</p>
            </div>
            <div className={cls.userInfo}>
              <p className={cls.titleUserINfo}>Адресс почты</p>
              <p className={cls.bakendInfo}>{userData.userData.email}</p>
              <p className={cls.titleUserINfo}>Роль</p>
              <p className={cls.bakendInfo}>{userData.userData.user_type}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
