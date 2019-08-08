import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Markdown from "react-markdown"
import styled from "styled-components"
import { format } from "date-fns"
import { space, SpaceProps } from "styled-system"
import Layout from "../components/core/layout"
import IconLink from "../components/iconlink"
import SEO from "../components/seo"
import Tags from "../components/tags"

import { ITag } from "../types/models"

const ImageContainer = styled.figure`
  max-height: 400px;
  margin: 2rem 0;
  overflow: hidden;
  // border-radius: 10px;
`

const MarkdownContainer = styled.div`
  img[src*="#center"] {
    display: block;
    margin: auto;
  }
`

const Box = styled.article<SpaceProps>(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space
)

const ProjectTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.strapiProject.name} />

      <header style={{ margin: `30px 0` }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ marginBottom: 0 }}>{data.strapiProject.name}</h1>
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
        <div style={{ fontSize: "0.9rem", color: "#777777", marginBottom: 10 }}>
          {format(new Date(data.strapiProject.createdAt), "dd MMMM yyyy")}
        </div>

        {data.strapiProject.techs && (
          <Tags tags={data.strapiProject.techs.map((tag: ITag) => tag.name)} />
        )}
      </header>

      <ImageContainer>
        <Img
          fluid={
            data.strapiProject.image
              ? data.strapiProject.image.childImageSharp.fluid
              : data.placeholderImage.childImageSharp.fluid
          }
        />
      </ImageContainer>

      <Box p={[0, 60]} pt={[0, 0]}>
        <MarkdownContainer>
          <Markdown source={data.strapiProject.content} escapeHtml={false} />
        </MarkdownContainer>
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
      createdAt
      updatedAt
      image {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    placeholderImage: file(relativePath: { eq: "coding-laptop-1.jpg" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
