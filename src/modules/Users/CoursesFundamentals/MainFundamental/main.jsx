import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import request from 'services/httpRequest';
import cls from './style.module.scss';
import { set } from 'mobx';
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
    </div>
  );
};
