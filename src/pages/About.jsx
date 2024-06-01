import { Alert, Container } from 'react-bootstrap'

const About = () => {
  return (
    <Container>
      <Alert variant="success">
        <div>
          <span className="fw-bold">Ho ten: </span>Nguyen Xuan Lam
        </div>
        <div>
          <span className="fw-bold">MSV: </span>PH45877
        </div>
      </Alert>
    </Container>
  )
}

export default About
