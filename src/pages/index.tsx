import { graphql, Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-grid-system"

import appConfig from "../config/app"

import Button from "../components/button"
import Card from "../components/card"
import Layout from "../components/core/layout"
import SEO from "../components/seo"
import Tags from "../components/tags"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <section
      style={{
        alignItems: "center",
        display: "flex",
        marginBottom: `5rem`,
        minHeight: `100vh`,
      }}
    >
      <div style={{ marginBottom: "30%" }}>
        <span style={{ fontSize: `1.5rem`, lineHeight: `2rem` }}>
          Hi, my name is
        </span>
        <h1 style={{ fontSize: `4rem` }}>Richard Lam.</h1>
        <p style={{ fontSize: `1.5rem`, lineHeight: `2rem`, maxWidth: 750 }}>
          I am a full-stack developer based in Orange County, CA specializing in
          web and mobile applications.
        </p>
        <Button href="mailto:richardvclam@gmail.com">Get in touch</Button>
      </div>
    </section>

    <section style={{ marginBottom: 300 }}>
      <h2>Skills</h2>

      <h3>Languages</h3>
      <Tags
        tags={["JavaScript", "HTML", "CSS", "PHP", "Java", "SQL"]}
        style={{ marginBottom: 26 }}
      />

      <h3>Technologies</h3>
      <Tags
        tags={[
          "React",
          "React Native",
          "Redux",
          "Node.js",
          "Express",
          "Next.js",
          "Gatsby",
          "Electron",
          "MySQL",
          "MongoDB",
          "REST",
          "WebSocket",
          "Unreal Engine",
          "Windows",
          "Linux",
          "OSX",
          "iOS",
          "tvOS",
          "XCode",
        ]}
        style={{ marginBottom: 26 }}
      />

      <h3>Tools & Other</h3>
      <Tags
        tags={[
          "AWS EC2",
          "AWS RDS",
          "AWS S3",
          "AWS GameLift",
          "Git",
          "NPM",
          "Yarn",
          "Sentry",
          "CodePush",
          "Photoshop",
        ]}
      />
      <Tags
        tags={["OOP", "FP", "MVC", "SSL", "Authentication", "Encryption"]}
        style={{ marginBottom: 26 }}
      />
    </section>

    {appConfig.enableBlog && (
      <section style={{ marginBottom: `5rem` }}>
        <h2>Latest posts</h2>
        <Container fluid={true} style={{ padding: 0, marginBottom: 50 }}>
          <Row>
            {data.allStrapiBlog.edges.map(blog => (
              <Col key={blog.node.id} md={6}>
                <Link to={`/blog/${blog.node.slug}`}>
                  <Card title={blog.node.title} />
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
        <div style={{ textAlign: "center" }}>
          <Button to="/blog">Read more posts</Button>
        </div>
      </section>
    )}

    <section style={{ marginBottom: `5rem` }}>
      <h2>Projects</h2>
      <Container fluid={true} style={{ padding: 0 }}>
        <Row>
          {data.allStrapiProject.edges.map(project => (
            <Col key={project.node.id} md={4} style={{ marginBottom: 50 }}>
              <Link to={`/projects/${project.node.slug}`}>
                <Card
                  title={project.node.name}
                  description={project.node.description}
                  image={
                    project.node.image
                      ? project.node.image.childImageSharp.fluid
                      : null
                  }
                  tags={project.node.techs}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <div style={{ textAlign: "center" }}>
        <Button to="/projects">See more projects</Button>
      </div>
    </section>

    <section style={{ textAlign: "center", padding: "150px 0" }}>
      <h2 style={{ fontSize: `2rem` }}>Get In Touch</h2>
      <p>
        I am currently looking for new opportunities. Please feel free to
        contact me.
      </p>

      <Button href="mailto:richardvclam@gmail.com">Say hello</Button>
    </section>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiBlog(limit: 3) {
      edges {
        node {
          id
          slug
          title
        }
      }
    }
    allStrapiProject(filter: { isFeatured: { eq: true } }) {
      edges {
        node {
          id
          slug
          name
          description
          techs {
            name
            slug
          }
          image {
            childImageSharp {
              fluid(maxWidth: 960) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
