import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import request from 'services/httpRequest';
import cls from './style.module.scss';
import CourseImg from 'assets/img/CourseImg.jpg';
import { set } from 'mobx';
import { color } from 'framer-motion';
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

  console.log(post);

  return (
    <div className={cls.mainWraper}>
      <p>course / {post.for_who}</p>
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
            <p>В этом уроке вы узнаете</p>

            <p className={cls.rule}> -что нужно знать, чтобы освоить новую профессию в сфере данных</p>
            <p className={cls.rule}> -что нужно знать, чтобы освоить новую профессию в сфере данных</p>
          </div>
          <div className={cls.homworkBox}>
            <p className={cls.homework}>
              обсуждаются значения электроотрицательности в химических связях по шкале Полинга. Дана классификация
              связей: ковалентных неполярных, ковалентных полярных или ионных. В видео обсуждаются значения
              электроотрицательности в химических связях по шкале Полинга. Дана классификация связей: ковалентных
              неполярных, ковалентных полярных или ионных. Дана классификация связей: ковалентных неполярных,
              ковалентных полярных или ионных. В видео обсуждаются значения электроотрицательности в химических связях
              по шкале Полинга. Дана классификация связей: ковалентных неполярных, ковалентных полярных или ионных. Дана
              классификация связей: ковалентных неполярных, ковалентных полярных или ионных. В видео обсуждаются
              значения электроотрицательности в химических связях по шкале Полинга. Дана классификация связей:
              ковалентных неполярных, ковалентных полярных или ионных.
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
  );
};
