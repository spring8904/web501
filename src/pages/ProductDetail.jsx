import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const { id } = useParams()
  const [p, setP] = useState({})
  const [images, setImages] = useState([])

  const getP = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/${id}`)
      setP(res.data)
      setImages(res.data.images)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getP()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          {/* <img style={{ width: '100%' }} src={p.thumbnail} alt="" /> */}
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              {images.map((image, i) => (
                <button
                  key={i}
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to={i}
                  className={`${i == 0 ? 'active' : ''}`}
                  aria-current="true"
                  aria-label={`Slide ${i + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {images.map((image, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i == 0 ? 'active' : ''}`}
                >
                  <img src={image} className="d-block w-100" alt="..." />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card py-4 px-3">
            <h3>{p.title}</h3>
            <p>${p.price}</p>
            <p>{p.description}</p>
            <button className="btn btn-primary" style={{ width: '100%' }}>
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
