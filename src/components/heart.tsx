import React from "react"
import styled from "styled-components"

const StyledHeart = styled.span`
  color: #f73f51;
  font-size: ${props => props.size || "inherit"};
`

export default function Heart() {
  return <StyledHeart>❤️</StyledHeart>
}
