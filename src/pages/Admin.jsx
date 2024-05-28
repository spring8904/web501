import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
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
      <div className="d-flex align-items-center justify-content-between">
        <h2>Danh sach san pham</h2>
        <button className="btn btn-primary">Them san pham</button>
      </div>
      <table className="table table-bordered text-center mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {ps.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <img src={p.thumbnail} style={{ height: '150px' }} alt="" />
              </td>
              <td>
                <Link to={`/product-detail/${p.id}`}>{p.title}</Link>
              </td>
              <td>${p.price}</td>
              <td>
                <button className="btn btn-warning me-3">Sua</button>
                <button className="btn btn-danger">Xoa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Admin
