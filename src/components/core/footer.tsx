import React from "react"
import Container from "../container"
import Heart from "../heart"

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
        <section style={{ textAlign: "center", color: "#fff" }}>
          Made with <Heart /> by Richard
        </section>
      </Container>
    </footer>
  )
}
