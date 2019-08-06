import { graphql, useStaticQuery } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import React from "react"
import styled from "styled-components"

import Tags from "./tags"

import { ITag } from "../types/models"

export interface IProps {
  title: string
  description?: string
  image?: FluidObject
  tags?: ITag[]
}

const CardContainer = styled.article`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 6px 2px 24px 8px rgba(0, 0, 0, 0.08);
  height: 100%;
`

const ImageContainer = styled.figure`
  border-radius: 10px 10px 0 0;
  height: 200px;
  margin-bottom: 1rem;
  overflow: hidden;
`

const Content = styled.section`
  color: #000;
  padding: 1rem;
`

const Card: React.FunctionComponent<IProps> = ({
  title,
  description,
  image,
  tags,
  style,
}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <CardContainer style={style}>
      <ImageContainer>
        <Img
          fluid={image ? image : data.placeholderImage.childImageSharp.fluid}
        />
      </ImageContainer>
      <Content>
        <h3 style={{ marginBottom: `0.5rem` }}>{title}</h3>
        {description && <p style={{ marginBottom: `0.5rem` }}>{description}</p>}

        {tags && <Tags tags={tags.map(tag => tag.name)} />}
      </Content>
    </CardContainer>
  )
}

export default Card
