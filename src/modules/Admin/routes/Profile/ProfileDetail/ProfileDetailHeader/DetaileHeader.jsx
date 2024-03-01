import { Container } from 'components/Container';
import cls from './style.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export const DetaileHeader = () => {
  return (
    <div>
      <div className={cls.headerProfile}>
        <Container>
          <div className={cls.headerWrap}>
            <div className={cls.wrapheader}>
              <Link to={'/admin/profile'} className={cls.iconLeft}>
                <FaArrowLeft />
              </Link>
              <p>Изменить профиль</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
