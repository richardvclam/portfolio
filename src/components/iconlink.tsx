import { OutboundLink } from "gatsby-plugin-google-analytics"
import styled from "styled-components"
import theme from "../config/theme"

const IconLink = styled(OutboundLink)`
  color: inherit;
  transition: color 0.15s ease-in-out;
  padding: 8px;

  &:hover {
    color: ${theme.primary};
  }
`

export default IconLink
