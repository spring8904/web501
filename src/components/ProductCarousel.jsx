import { useState } from 'react'
import { Carousel } from 'react-bootstrap'

const ProductCarousel = ({ images }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images?.length > 0 &&
        images.map((image, i) => (
          <Carousel.Item key={i}>
            <img
              src={image}
              className="d-block w-100"
              style={{ height: '360px' }}
              alt="..."
            />
          </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default ProductCarousel
