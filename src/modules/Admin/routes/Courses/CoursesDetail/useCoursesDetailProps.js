import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import request from 'services/httpRequest';

export const useCoursesDetailProps = () => {

    const [detail, setDetail] = useState()
    const param = useParams()
    // console.log(param)
    
    useEffect(() => {
        request.get(`course/${param.id}`)
        .then(res => setDetail(res.data))
    }, [])


  return {
    detail,
  };
};
