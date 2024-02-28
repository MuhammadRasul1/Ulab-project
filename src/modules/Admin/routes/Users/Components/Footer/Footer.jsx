import { Container } from "components/Container";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";

export const Footer = () => {

  return(
    <footer className={cls.footer}>
      <Container>
        <nav className={cls.nav}>
          <ol className={cls.navList}>
            <li className={cls.navItem}>
                <Link className={cls.link} to="admin/courses/1">1</Link>
            </li>
            <li className={cls.navItem}>
                <Link className={cls.link} to="admin/courses/2">2</Link>
            </li>
            <li className={cls.navItem}>
                <Link className={cls.link} to="admin/courses/3">3</Link>
            </li>
            <li className={cls.navItem}>
                <Link className={cls.link} to="admin/courses/4">4</Link>
            </li>
            <li className={cls.navItem}>
                <Link className={cls.link} to="admin/courses/5">5</Link>
            </li>
          </ol>
        </nav>
      </Container>
    </footer>
  ) 
};
