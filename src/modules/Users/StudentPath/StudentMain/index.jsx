import cls from './styles.module.scss';
import imgeCorse from 'assets/img/icon/Backend.svg';
import imgeOklok from 'assets/img/icon/Huge-icon.svg';
import Search from 'assets/img/icon/search.svg';
import expends from 'assets/img/icon/expand_more.svg';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import notificationIcon from 'assets/img/icon/notifications.svg';
import chat_bubblIcon from 'assets/img/icon/chat_bubble.svg';
export const StudentMain = () => {
  const URL = 'https://lms-vuny.onrender.com/lms/api/course';
  const [course, SetCourse] = useState([]);
  React.useEffect(() => {
    axios.get(URL).then((response) => {
      SetCourse(response.data.courses);
    });
  }, []);

  if (!course) return null;

  const doubleValue = course.map((course) => {
    return course;
  });

  return (
    <div>
      <div className={cls.MyCourse}>
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
        <p className={cls.nameCourse}>Мои Курсы</p>
        <div className={cls.wraperCourse}>
          <div className={cls.MyCourseBox}>
            <div className={cls.myCorsePart1}>
              <div className={cls.wrapInfo}>
                <div className={cls.wrapImeCourse}>
                  <img src={imgeCorse} alt="" />
                </div>
                <div>
                  <div className={cls.titlePart1}>
                    <p className={cls.titleCourse}>Go Backend</p>

                    <div className={cls.percent}>
                      <div className={cls.percentLine}> </div>
                    </div>
                  </div>
                  <p className={cls.infoCorse}>
                    Go (Golang) — это компилируемый многопоточный язык программирования от Google с открытым исходным
                    кодом.
                  </p>
                </div>
              </div>
              <div className={cls.aboutTimeProcess}>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
              </div>{' '}
              <button className={cls.dateBtn}>Подробнее</button>
            </div>
          </div>
          <div className={cls.MyCourseBox}>
            <div className={cls.myCorsePart1}>
              <div className={cls.wrapInfo}>
                <div className={cls.wrapImeCourse}>
                  <img src={imgeCorse} alt="" />
                </div>
                <div>
                  <div className={cls.titlePart1}>
                    <p className={cls.titleCourse}>Go Backend</p>

                    <div className={cls.percent}>
                      <div className={cls.percentLine}> </div>
                    </div>
                  </div>
                  <p className={cls.infoCorse}>Go (Golang) — это компилируемый многопоточный</p>
                </div>
              </div>
              <div className={cls.aboutTimeProcess}>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
                <div className={cls.timePros}>
                  <p> 5 раз</p>
                  <div className={cls.timeDate}>
                    <img src={imgeOklok} alt="" />
                    <p>в неделю</p>
                  </div>
                </div>
              </div>{' '}
              <button className={cls.dateBtn}>Подробнее</button>
            </div>
          </div>
        </div>
        <p className={cls.nameCourse}>Все курсы</p>
        <div className={cls.getDate}>
          <img className={cls.searIcon} src={Search} alt="" />
          <input className={cls.inputNameCourse} placeholder="Название курса" type="text" />
          <input className={cls.inputCooseingCourse} placeholder="Направление" type="text" />
          <img className={cls.expen} src={expends} alt="" />
          <button className={cls.btnSearch}>Найти</button>
        </div>
        <div className={cls.wraperCourse}>
          {doubleValue.map((item) => (
            <div key={item.id} className={cls.MyCourseBox}>
              <div className={cls.myCorsePart1}>
                <div className={cls.wrapInfo}>
                  <div className={cls.wrapImeCourse}>
                    <img src={item.photo} alt={item.name} />
                  </div>
                  <div>
                    <div className={cls.titlePart1}>
                      <p className={cls.titleCourse}>{item.name}</p>

                      <div className={cls.percent}>
                        <div className={cls.percentLine}> </div>
                      </div>
                    </div>
                    <p className={cls.infoCorse}>{item.for_who}</p>
                  </div>
                </div>
                <div className={cls.aboutTimeProcess}>
                  <div className={cls.timePros}>
                    <p> {item.duration} раз</p>
                    <div className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}> в неделю</p>
                    </div>
                  </div>
                  <div className={cls.timePros}>
                    <p> {item.weekly_number} раз</p>
                    <div className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}>в неделю</p>
                    </div>
                  </div>
                  <div className={cls.timePros}>
                    <p> {item.price} </p>
                    <div className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}>каждый месяц</p>
                    </div>
                  </div>
                  <div className={cls.timePros}>
                    <p> {item.beginning_date_course}</p>
                    <div className={cls.timeDate}>
                      <img src={imgeOklok} alt="" />
                      <p className={cls.infoTimeP}>Начала курса</p>
                    </div>
                  </div>
                </div>
                <NavLink className="navbar-item" activeClassName="is-active" to={`${item.id}`}>
                  <button className={cls.dateBtn}>Подробнее</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={cls.EveryCourse}></div>
    </div>
  );
};
