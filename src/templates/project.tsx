import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Markdown from "react-markdown"
import styled from "styled-components"
import { space, SpaceProps } from "styled-system"
import Layout from "../components/core/layout"
import Tags from "../components/tags"

import theme from "../config/theme"

import { ITag } from "../types/models"

const ImageContainer = styled.figure`
  max-height: 400px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 10px;
`

const Box = styled.article<SpaceProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space
)

const IconLink = styled.a`
  color: inherit;
  transition: color 0.15s ease-in-out;
  padding: 8px;

  &:hover {
    color: ${theme.primary};
  }
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

      <Box p={[0, 40]} pt={20}>
        <header style={{ marginBottom: 40 }}>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ marginBottom: 10 }}>{data.strapiProject.name}</h1>
            <div>
              {data.strapiProject.link && (
                <IconLink href={data.strapiProject.link} target="_blank">
                  <FaExternalLinkAlt size={22} />
                </IconLink>
              )}
              {data.strapiProject.github && (
                <IconLink href={data.strapiProject.github} target="_blank">
                  <FaGithub size={22} />
                </IconLink>
              )}
            </div>
          </div>
          {data.strapiProject.techs && (
            <Tags
              tags={data.strapiProject.techs.map((tag: ITag) => tag.name)}
            />
          )}
        </header>

        <Markdown source={data.strapiProject.content} />
      </Box>
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
      github
      link
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
