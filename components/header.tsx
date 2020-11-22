
import Link from 'next/link';
import { signin, signout, useSession } from 'next-auth/client';

const name = 'Leonardo Rasile'

export default function Header({ home }: { home?: boolean }) {

  const [session, loading] = useSession();

  return (
    <header>
      <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark'>
        <div className='container'>
          <a className="navbar-brand" href="/">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mr-1">
              {!session && (
                <li className="nav-item">
                  <a className="nav-link"
                    href="/api/auth/signin"
                    onClick={(e) => {
                      e.preventDefault();
                      signin();
                    }}
                  >
                    <button className="btn btn-primary">Sign in</button>
                  </a>
                </li>
              )}
              {session && (
                <>
                  <li className="nav-item">
                    <Link href="/profile">
                      <a className="nav-item">
                        <span
                          style={{ backgroundImage: `url(${session.user.image})` }}
                          className="avatar"
                        />
                        <span className="nav-link" >{session.user.email} </span>
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-item"
                      href="/api/auth/signout"
                      onClick={(e) => {
                        e.preventDefault();
                        signout();
                      }}
                    >
                      <button className="btn btn-outline-primary">Sign out</button>
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

    </header >
  );
};

