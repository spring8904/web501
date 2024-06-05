import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Header = () => {
  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user')
    navigate('/login')
    toast.success('Logout success')
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src="../../public/vite.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="fw-semibold">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
            <NavDropdown title="Auth">
              {!user ? (
                <>
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  <NavDropdown.Divider />
                  <Link to="/register" className="dropdown-item">
                    Register
                  </Link>
                </>
              ) : (
                <NavDropdown.Item onClick={logout}>Log out</NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
