import { Container } from 'components/Container';
import { DetaileHeader } from './ProfileDetailHeader/DetaileHeader';
import userImgEditer from 'assets/img/icon/userAvatar.svg';
import cls from './style.module.scss';
import { useEffect, useState } from 'react';
import { useUpdateUserById } from 'services/users.service';
import { authStore } from 'store/auth.store';
import { useForm } from 'react-hook-form';
import { Input } from 'components/Input';
import { Box } from '@chakra-ui/react';
import request from 'services/httpRequest';
import React from 'react';
export const ProfileDetail = () => {
  const userData = JSON.parse(localStorage.getItem('auth'));
  const activeUserId = userData?.userData?.id;
  console.log(activeUserId);
  const updateUser = useUpdateUserById();
  const handleEdit = (data) => {
    updateUser.mutate(
      {
        ...data,
        id: activeUserId,
      },
      // {
      //   onSuccess: (res) => {
      //     authStore.updateUserData({
      //       id: res?.id,
      //       role_id: res?.role_id,
      //       first_name: res?.first_name,
      //       last_name: res?.last_name,
      //       email: res?.email,
      //       phone_number: res?.phone_number,
      //       password: res?.password,
      //       user_type: res?.user_type,
      //     });
      //     authStore.login();
      //   },
      // },
    );
  };

  // const [data, setData] = useState({});
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch(`/lms/api/v1/user/${activeUserId}`, {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const result = await response.json();
  //   console.log(result);
  // };

  // const deleteUser = useDeleteUserById();

  // const handleDeleteUser = (data) => {
  //   deleteUser.mutate({ ...data, id: activeUserId });
  // };

  const { register, reset, handleSubmit } = useForm();
  useEffect(() => {
    const data = userData?.userData;

    reset({
      first_name: data?.first_name,
      last_name: data?.last_name,
      phone_number: data?.phone_number,
      user_type: data?.user_type,
      email: data?.email,
    });
  }, []);

  return (
    <div>
      <DetaileHeader />
      <Container>
        <div className={cls.imgeEditerBox}>
          <div className={cls.userImgEditer}>
            <img src={userImgEditer} alt="UserAvatar" width={200} />
          </div>
          <div className={cls.editorBox}>
            <div className={cls.editorBtn}>
              <button className={cls.upDatePhoto}>
                Загрузить фото
                {/* <input type="file" /> */}
              </button>
              <button className={cls.dalatePhoto}>Удалить фото</button>
            </div>
            <p className={cls.rulse}>Рекомендуемый размер: максимальный квадрат 1000 пикселей.</p>
            <p className={cls.rulse}>Тип файла: JPG и PNG</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleEdit)}>
          <Box className={cls.inputEditerBox}>
            <Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="email">
                  Имя
                </label>

                <Input id="name" type="text" placeholder="Введите e-mail" register={register} name="first_name" />
              </Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="first_name">
                  Телефон номера
                </label>

                <Input id="name" type="number" register={register} name="phone_number" />
              </Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="user_type">
                  Роль
                </label>

                <Input id="name" type="text" register={register} name="user_type" />
              </Box>
              <Box className={cls.btnWraper}>
                <button className={cls.cancelBtn}>Отменить</button>
                <button className={cls.saveBtn}>Сохранить изменения</button>
              </Box>
            </Box>
            <Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="first_name">
                  Фамилия
                </label>

                <Input id="name" type="text" register={register} name="last_name" />
              </Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="first_name">
                  Адресс почты
                </label>

                <Input id="name" type="email" placeholder="Введите e-mail" register={register} name="email" />
              </Box>
              <Box display={'block'} marginTop={10}>
                <label className={cls.lable} htmlFor="Логин">
                  Логин
                </label>
                <Input id="name" type="password" placeholder="Логин" register={register} name="password" />
              </Box>
            </Box>
          </Box>
        </form>
      </Container>
    </div>
  );
};
