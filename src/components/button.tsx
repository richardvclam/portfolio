import Color from "color"
import { Link } from "gatsby"
import * as React from "react"
import styled, { ThemeProvider } from "styled-components"
import themeConfig from "../config/theme"

export type ColorOption = "primary"

export interface IThemeType {
  backgroundColor: string
  borderColor: string
  color: string
}

export interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorOption
  href?: string
  outline?: boolean
  tag?: React.ReactType
  to?: string
}

const theme: { [key in ColorOption]: IThemeType } = {
  primary: {
    backgroundColor: themeConfig.primary,
    borderColor: themeConfig.primary,
    color: "#fff",
  },
}

const STag = (Tag: React.ElementType<any>) => styled(Tag)`
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  padding: 10px 20px;
  border-radius: 4px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundColor};
  border: 1px solid ${props => props.theme.borderColor};

  &:hover {
    background-color: ${props =>
      Color(props.theme.backgroundColor)
        .lighten(0.2)
        .hex()};
    border: 1px solid
      ${props =>
        Color(props.theme.backgroundColor)
          .lighten(0.2)
          .hex()};
  }
`
const Button: React.FunctionComponent<IProps> = props => {
  const { color, children, tag, ...attributes } = props
  let Tag = tag

  if (attributes.to) {
    Tag = Link
  } else if (attributes.href) {
    Tag = "a"
  }

  const StyledTag = STag(Tag!)

  return (
    <ThemeProvider theme={theme[color!]}>
      <StyledTag {...attributes}>{children}</StyledTag>
    </ThemeProvider>
  )
}

Button.defaultProps = {
  color: "primary",
  outline: false,
  tag: "button",
}

export default Button
