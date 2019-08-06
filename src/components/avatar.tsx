import Color from "color"
import * as React from "react"
import styled from "styled-components"
import theme from "../config/theme"

export interface IProps {
  initials: string
}

const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: background-color 0.15s ease-in-out;

  &:hover {
    background-color: ${Color(theme.primary)
      .lighten(0.2)
      .hex()};
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
    color: #fff;
  }
`

const Avatar: React.FunctionComponent<IProps> = ({ initials }) => {
  return (
    <AvatarContainer>
      <span>{initials}</span>
    </AvatarContainer>
  )
}

export default Avatar
