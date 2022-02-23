import styles from "../styles/Home.module.css";
import imdb from "../public/imdb.png";
import lnbug from "../public/lnbug.png";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";

export default function Page({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.code}>
          Thanks for Visiting but I am still building this site as of Feb 16th
          2022 👷
          <br /> Check back again soon!
        </h2>
        <Navbar>
          <Container className={styles.topPageHeader}>
            <Navbar.Brand>
              <div className={styles.headername}>James Spadafora</div>
              <div className={styles.headertagline}>
                a software developer in Visual Effects
              </div>
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="https://www.linkedin.com/in/james-spadafora-b3433926/">
                <Image src={lnbug} alt="Linkedin Logo" width={37} height={37} />
              </Nav.Link>

              <Nav.Link href="https://www.imdb.com/name/nm5673851/">
                <Image src={imdb} alt="imdb Logo" width={37} height={37} />
              </Nav.Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {children}
      </main>
      <footer className={styles.footer}>This site was built with NextJs</footer>
    </div>
  );
}
