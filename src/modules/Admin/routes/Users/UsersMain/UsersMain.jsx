import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useUsersMainProps } from "./useUsersMainProps";
import { Link } from "react-router-dom";
import { Container } from "components/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export const UsersMain = () => {

  const { } = useUsersMainProps();

  return(
    <Box borderBottom="1px solid #E5E9EB" padding="10px 0" marginBottom="20px">
      <Container>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="users" title="Ученики">
            Tab content for Home
          </Tab>
          <Tab eventKey="mentors" title="Менторы">
            Tab content for Profile
          </Tab>
        </Tabs>

      </Container>
    </Box>
  ) 
}

//         // <ul className={cls.list}>
//         //   <li className={cls.item}>
//         //     <Link className={cls.link} to="/admin/users">Ученики</Link>
//         //   </li>
//         //   <li className={cls.item}>
//         //     <Link className={cls.link} to="/admin/mentors">Менторы</Link>
//         //   </li>
//         // </ul>

