import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Home.module.css";
\
import remarkGfm from "remark-gfm";
import a11yEmoji from "@fec/remark-a11y-emoji";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula as dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function BlogPostLink({
  id,
  author,
  created_at,
  image,
  body,
  title,
}) {
  return (
    <Card className="bg-dark text-white">
      <div className={styles.card}>
        {image ? (
          <>
            <Card.Img src={image} alt={title} />
            {console.log("img", image)}
            <Card.ImgOverlay>
              <Card.Title>
                <h2>
                  <Container className={styles.darkenbg}>
                    <Row>
                      <Col>{title}</Col>
                      <Col>
                        {author} - {created_at}
                      </Col>
                    </Row>
                  </Container>
                </h2>
              </Card.Title>
            </Card.ImgOverlay>
            <Card.Text>
              <ReactMarkdown
                children={body}
                remarkPlugins={[remarkGfm, a11yEmoji]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </Card.Text>
          </>
        ) : (
          <>
            <Card.Title>
              <h2>
                <Container className={styles.darkenbg}>
                  <Row>
                    <Col>{title}</Col>
                    <Col>
                      {author} - {created_at}
                    </Col>
                  </Row>
                </Container>
              </h2>
            </Card.Title>
            <Card.Text>
              <ReactMarkdown
                children={body}
                remarkPlugins={[remarkGfm, a11yEmoji]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={dark}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </Card.Text>
          </>
        )}
      </div>
    </Card>
  );

  // return <div>{title}</div>;
}
