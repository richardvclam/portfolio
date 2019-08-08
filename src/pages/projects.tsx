import { graphql, Link } from "gatsby"
import React from "react"
import { Col, Container, Row } from "react-grid-system"

import Layout from "../components/core/layout"

import Card from "../components/card"
import SEO from "../components/seo"

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <div style={{ margin: `30px 0` }}>
      <h1>Projects</h1>
    </div>

    <Container fluid={true} style={{ padding: 0 }}>
      <Row>
        {data.allStrapiProject.edges.map(project => (
          <Col key={project.node.id} md={6} style={{ marginBottom: 50 }}>
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
  </Layout>
)

export default ProjectsPage

export const pageQuery = graphql`
  query ProjectsQuery {
    allStrapiProject(sort: { order: DESC, fields: createdAt }) {
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
