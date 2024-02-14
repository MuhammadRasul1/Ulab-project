import { Button } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useMainProps } from "./useMainProps";

export const UsersList = () => {

  const { mainText, users, handleLogOut } = useMainProps();

  return <>
    <h1 className={cls.title}>Users MAIN: {mainText}</h1>
    <Button background={"red"} color={"white"} onClick={handleLogOut}>LOG OUT</Button>
    <ul className={cls.list}>
      {
        users?.map(user => <li key={user.id}>{user.name}</li>)
      }
    </ul>
  </>;
};
