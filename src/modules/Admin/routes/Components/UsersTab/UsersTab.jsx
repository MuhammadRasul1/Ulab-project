import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Container } from "components/Container";

export const UsersTab = () => {

  return(
    <Box borderBottom="1px solid #E5E9EB" padding="10px 0" marginBottom="20px">
      <Container>
        <ul className={cls.list}>
          <li className={cls.item}>
            <Link className={cls.link} to="/admin/users">Ученики</Link>
          </li>
          <li className={cls.item}>
            <Link className={cls.link} to="/admin/mentors">Менторы</Link>
          </li>
        </ul>
      </Container>
    </Box>
  ) 
}