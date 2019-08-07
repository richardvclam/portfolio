import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

import Container from "../container"
import Heart from "../heart"
import IconLink from "../iconlink"

export default function Footer({ className }) {
  return (
    <footer
      className={className}
      style={{
        backgroundColor: `#000`,
        color: `rgba(255, 255, 255, 0.4)`,
      }}
    >
      <Container>
        <section
          style={{ textAlign: "center", color: "#ffffff", marginBottom: 20 }}
        >
          <IconLink href="https://github.com/richardvclam" target="_blank">
            <FaGithub size={24} />
          </IconLink>{" "}
          <IconLink
            href="https://www.linkedin.com/in/richardvclam"
            target="_blank"
          >
            <FaLinkedinIn size={24} />
          </IconLink>
        </section>
        <section style={{ textAlign: "center", color: "#ffffff" }}>
          Made with <Heart /> by Richard
        </section>
      </Container>
    </footer>
  )
}
