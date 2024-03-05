import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import request from 'services/httpRequest';
import cls from './style.module.scss';
import CourseImg from 'assets/img/CourseImg.jpg';
import { set } from 'mobx';
import { color } from 'framer-motion';
import { Container } from 'components/Container';
export const MainFundamental = () => {
  const { postId } = useParams();

  let { pathname } = useLocation();
  pathname = pathname.substring(1);

  const [post, setPost] = useState({});
  useEffect(() => {
    request.get(`/course/${postId}`).then((res) => {
      setPost(res.data);
    });
  }, []);
  const vd =
    'https://firebasestorage.googleapis.com/v0/b/lms-service-415606.appspot.com/o/video.mp4?alt=media&token=8466d439-0058-4f10-bc21-2dd19b83fa06';
  return (
    <Container>
      <div className={cls.mainWraper}>
        <p className={cls.linkCourse}>
          <Link className={cls.Link} to={'/'}>
            course
          </Link>{' '}
          / {post.for_who}
        </p>
        <div className={cls.percentageBox}>
          <p className={cls.beginingDate}>{post.beginning_date_course}</p>
          <p className={cls.forWho}>{post.name}</p>

          <div>
            <p>1 of 62 lessons completed</p>
            <div className={cls.lineBox}>
              <div className={cls.line}></div>
            </div>
          </div>
        </div>
        <div className={cls.CourseImgBox}>
          <img src={post.photo} alt={post.name} />
        </div>
        <div className={cls.inofoCourse}>
          <p className={cls.titleCourse}>Электроотрицательность и химическая связь</p>
          <div className={cls.abouteCourse}>
            <div className={cls.aboutRoulse}>
              <video width={800} height={400} src={vd} controls></video>
            </div>
            <div className={cls.homworkBox}>
              <p>HOMEWORK обсуждаются значения электроотрицательности в химических связях по шкале Полинга. Дана</p>
              <p className={cls.homework}>
                классификация связей: ковалентных неполярных, ковалентных полярных или ионных. В видео обсуждаются
                значения электроотрицательности в химических связях по шкале Полинга. Дана классификация связей:
                ковалентных неполярных, ковалентных полярных или ионных. Дана классификация связей: ковалентных
                неполярных, ковалентных полярных или ионных. В видео обсуждаются значения электроотрицательности в
                химических связях по шкале Полинга. Дана классификация связей: ковалентных неполярных, ковалентных
                полярных или ионных. Дана классификация связей: ковалентных неполярных, ковалентных полярных или ионных.
                В видео обсуждаются значения электроотрицательности в химических связях по шкале Полинга. Дана
                классификация связей: ковалентных неполярных, ковалентных полярных или ионных.
              </p>
              <div className={cls.btnDiv}>
                <Link to={'/'}>
                  <button className={cls.bleckBtn}> К следующему уроку</button>
                </Link>
                <Link to={'/'}>
                  <button className={cls.whitheBtn}>К ратки пересказ урока</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
