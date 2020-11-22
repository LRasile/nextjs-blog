
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client';
import { Nav, Navbar, NavDropdown, Container, Button, Image } from 'react-bootstrap';

export default function Header({ home }: { home?: boolean }) {

  const [session, loading] = useSession();

  const avatar = (
    <Image src={session?.user?.image}
      style={{ height: '2rem', width: '2rem', marginRight: '0.5rem' }}
      roundedCircle />
  )

  const signInOutButton = session ?
    (
      <NavDropdown title={avatar} id="collasible-nav-dropdown">
        <NavDropdown.Item href="/profile">
          Profile
        </NavDropdown.Item>
        <NavDropdown.Item href="/api/auth/signout" onClick={(e) => { e.preventDefault(); signout(); }}>
          Sign Out
        </NavDropdown.Item>
      </NavDropdown>
    ) :
    (
      <Nav.Link href="/api/auth/signin" onClick={(e) => { e.preventDefault(); signin(); }}>
        <Button variant="outline-primary">Sign in</Button>
      </Nav.Link>
    );

  return (
    <header>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="navbar-nav ml-auto mr-1">{signInOutButton}</Nav>
        </Container>
      </Navbar>
    </header >
  );
};

