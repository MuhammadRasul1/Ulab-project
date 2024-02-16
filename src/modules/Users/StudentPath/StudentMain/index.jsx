import cls from './styles.module.scss';
import imgeCorse from 'assets/img/icon/Backend.svg';
import imgeOklok from 'assets/img/icon/Huge-icon.svg';
import Search from 'assets/img/icon/search.svg';
import expends from 'assets/img/icon/expand_more.svg';

export const StudentMain = () => {
  return (
    <div>
      <div className={cls.MyCourse}>
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
              </div>
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
        </div>
      </div>
      <div className={cls.EveryCourse}></div>
    </div>
  );
};
