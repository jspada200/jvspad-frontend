import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

import me from "../public/me.png";
import Page from "../components/Page";

export default function Home() {
  return (
    <Page>
      <Head>
        <title>James V Spadafora</title>
        <meta
          name="description"
          content="Personal site for James V. Spadafora"
        />
        {
          //<link rel="icon" href="/favicon.ico" />
        }
      </Head>

      <Container className={styles.description}>
        <Row>
          <Col>
            <p>Hi, my name is James Spadafora (or Spad for short).</p>

            <p>
              I work in the VISUAL EFFECTS 🎥 <br />
              industry specializing in PRODUCTION TRACKING software and APIs.
            </p>
            <p>
              I have also worked as a Pipeline TD and TA
              <br />
              (fixing broken stuff and reacting to &quot;oh c**p we need this
              now&quot; requests)
            </p>
            <p>I am a permanent resident of Canada in Vancouver BC 🍁</p>
          </Col>
          <Col>
            <Image src={me} alt="me" width={250} height={241} />
          </Col>
        </Row>
      </Container>
      <Container className={styles.workdescriptions}>
        <Row>
          <Col>
            <p>
              I work reguraly with
              <ul>
                <li>Python</li>
                <li>django</li>
                <li>React</li>
                <li>Shotgrid</li>
                <li>Docker</li>
                <li>Ansible</li>
                <li>Git</li>
              </ul>
            </p>
          </Col>
          <Col>
            <p>
              I have experence working with visual effects software <br />
              such as but not limited to
              <ul>
                <li>Maya</li>
                <li>Houdini</li>
                <li>Nuke</li>
                <li>Katana</li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </Page>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
