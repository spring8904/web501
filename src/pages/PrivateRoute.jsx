import { Alert, Container } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const PrivateRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (!user || !user.email || !user.accessToken) {
    return (
      <Container className="mt-3">
        <Alert variant="danger">
          You need to login to access this page! <Link to="/login">Login</Link>
        </Alert>
      </Container>
    )
  }

  return <Outlet />
}

export default PrivateRoute
