import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [ps, setPs] = useState([])

  const getPs = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/products/`)
      setPs(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPs()
  }, [])

  return (
    <div className="container">
      <h2 className="alert alert-success">Danh sanh san pham</h2>
      <div className="row">
        {ps.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <Link to={`/product-detail/${p.id}`}>
                <img
                  src={p.thumbnail}
                  style={{ height: '200px', width: '100%' }}
                  alt=""
                />
              </Link>
              <div className="px-4 py-3">
                <Link to={`/product-detail/${p.id}`}>
                  <h6>{p.title}</h6>
                </Link>
                <p>${p.price}</p>
                <button className="btn btn-primary" style={{ width: '100%' }}>
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
