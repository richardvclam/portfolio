/**
 * Layout component
 */

import * as React from "react"
import Headroom from "react-headroom"
import styled from "styled-components"
import Container from "../container"
import Footer from "./footer"
import Header from "./header"

import "./layout.css"

export interface IProps {
  children: React.ReactNode
}

const StyledLayout = styled.div`
  min-height: 100vh; /* will cover the 100% of viewport */
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 100px; /* height of your footer */

  footer.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`

const Layout: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Headroom>
        <Header />
      </Headroom>
      <main>
        <Container>{children}</Container>
      </main>
      <Footer className="footer" />
    </StyledLayout>
  )
}

export default Layout
