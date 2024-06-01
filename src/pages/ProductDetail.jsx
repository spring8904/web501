import { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel'
import productServices from '../services/productServices'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [images, setImages] = useState([])

  const getProduct = async () => {
    try {
      const res = await productServices.get(id)
      console.log(res)
      setProduct(res)
      setImages(res.images)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Row>
        <Col lg={6}>
          <ProductCarousel images={images} />
        </Col>
        <Col lg={6}>
          <Card className="py-4 px-3">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
              <Card.Text>{product.description}</Card.Text>
              <Button variant="primary" className="w-100">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
