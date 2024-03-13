import { Container } from "components/Container";
import cls from "./styles.module.scss";

export const Footer = () => {

  return(
    <footer className={cls.footer}>
      <Container>
        <nav className={cls.nav}>
          <ol className={cls.navList}>
            <li className={cls.navItem}>
                <button className={cls.link}>1</button>
            </li>
          </ol>
        </nav>
      </Container>
    </footer>
  ) 
};
