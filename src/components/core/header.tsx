import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import React from "react"
import styled from "styled-components"

import appConfig from "../../config/app"
import theme from "../../config/theme"

import Avatar from "../avatar"
import Container from "../container"

const Nav = styled.nav`
  ul {
    margin: 0;
  }
  li {
    display: inline-block;
    margin-bottom: 0;
    padding: 0 20px;
  }

  li a {
    color: inherit;
    transition: color 0.4s ease-in;

    &:hover {
      color: ${theme.primary};
      transition: color 0.4s ease-out;
    }
  }
`

const navOptions = [
  { title: "Projects", to: "/projects", disable: !appConfig.enableProjects },
  { title: "Blog", to: "/blog", disable: !appConfig.enableBlog },
  { title: "Contact", to: "/contact", disable: true },
  { title: "Resume", href: "/resume.pdf" },
]

const Header = () => (
  <header
    style={{
      background: `#fff`,
      boxShadow: `6px 2px 24px 8px rgba(0,0,0,0.08)`,
      margin: 0,
    }}
  >
    <Container
      style={{
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/">
        <Avatar initials="RL" />
      </Link>

      <Nav>
        <ul>
          {navOptions.map(nav => {
            if (nav.disable) {
              return null
            }

            if (nav.href) {
              return (
                <li key={nav.title}>
                  <OutboundLink href={nav.href} target="_blank">
                    <span style={{ fontWeight: "bold" }}>{nav.title}</span>
                  </OutboundLink>
                </li>
              )
            }

            return (
              <li key={nav.title}>
                <Link to={nav.to}>
                  <span style={{ fontWeight: "bold" }}>{nav.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </Nav>
    </Container>
  </header>
)

export default Header
