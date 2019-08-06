import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Markdown from "react-markdown"
import styled from "styled-components"
import Layout from "../components/core/layout"

const ImageContainer = styled.figure`
  height: 400px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 10px;
`

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <ImageContainer>
        <Img
          fluid={
            data.strapiProject.image
              ? data.strapiProject.image.childImageSharp.fluid
              : data.placeholderImage.childImageSharp.fluid
          }
        />
      </ImageContainer>

      <div style={{ padding: 40 }}>
        <h1>{data.strapiProject.name}</h1>

        <Markdown source={data.strapiProject.content} />
      </div>
    </Layout>
  )
}

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplate($slug: String!) {
    strapiProject(slug: { eq: $slug }) {
      name
      content
      techs {
        name
        slug
      }
      image {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
