import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as z from 'zod'
import productServices from '../../../services/productServices'

const productSchema = z.object({
  title: z.string().min(6),
  price: z.number().gte(0),
  description: z.string().optional(),
})

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(productSchema),
  })

  const navigate = useNavigate()
  const { id } = useParams()

  const getProduct = async () => {
    try {
      const res = await productServices.get(id)
      reset(res)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSubmit = async (data) => {
    try {
      const res = await productServices.patch({ ...data, id })
      if (res) {
        navigate('/dashboard')
        toast.success('Edit product successfully')
      }
    } catch (error) {
      toast.error(error.message || error)
      console.error(error)
    }
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Card>
            <Card.Header className="fs-3">Edit Product</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                  <Form.Label>Title:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    {...register('title')}
                  />
                  {errors.title?.message && (
                    <p className="text-danger">{errors.title?.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    {...register('price', {
                      valueAsNumber: true,
                    })}
                  />
                  {errors.price?.message && (
                    <p className="text-danger">{errors.price?.message}</p>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    Description <span className="fw-light">(optional)</span>:
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    {...register('description')}
                  />
                  {errors.description?.message && (
                    <p className="text-danger">{errors.description?.message}</p>
                  )}
                </Form.Group>

                <div className="d-flex gap-2 justify-content-end">
                  <Button variant="secondary" onClick={() => navigate(-1)}>
                    Go back
                  </Button>
                  <Button type="submit" variant="primary">
                    Save
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default EditProduct
