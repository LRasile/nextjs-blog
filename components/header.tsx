import React, { ReactElement } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

export default function Header(): ReactElement {
  return (
    <header>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="navbar-nav ml-auto mr-1" />
        </Container>
      </Navbar>
    </header>
  )
}
