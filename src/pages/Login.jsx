import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as z from 'zod'
import userServices from '../services/userServices.js'

const productSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

const Login = () => {
  localStorage.removeItem('user')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) })

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      const res = await userServices.login(data)
      if (res) {
        const data = {
          ...res.user,
          accessToken: res.accessToken,
        }
        localStorage.setItem('user', JSON.stringify(data))
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response?.data || error)
      console.error(error)
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card>
            <Card.Header className="fs-3">Login</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    {...register('email')}
                  />
                  {errors.email?.message && (
                    <p className="text-danger">{errors.email?.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    {...register('password')}
                  />
                  {errors.password?.message && (
                    <p className="text-danger">{errors.password?.message}</p>
                  )}
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              Don&apos;t have an account? <Link to="/register">Register</Link>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
