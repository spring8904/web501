import { useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import productServices from '../services/productServices'

const Home = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await productServices.get()
      setProducts(res.reverse())
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <Container>
      <Alert variant="success" className="fs-2">
        Product List
      </Alert>
      <Row>
        {products?.length > 0 &&
          products.map((product) => (
            <Col sm={6} md={4} lg={3} key={product.id} className="mb-4">
              <Card>
                <Link to={`/product-detail/${product.id}`}>
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    style={{
                      height: '200px',
                      width: '100%',
                      objectFit: 'contain',
                    }}
                    alt=""
                  />
                </Link>
                <Card.Body className="px-4 py-3">
                  <Link to={`/product-detail/${product.id}`}>
                    <Card.Title className="fs-6">{product.title}</Card.Title>
                  </Link>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary" className="w-100">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default Home
