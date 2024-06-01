import { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ModalDeleteProduct from '../../components/ModalDeleteProduct'
import productServices from '../../services/productServices'

const Dashboard = () => {
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

  const [isShowModalDelete, setIsShowModalDelete] = useState(false)
  const [productDelete, setProductDelete] = useState({})

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-between">
        <h2>Product List</h2>
        <Link className="btn btn-primary" to="/dashboard/add-product">
          Add Product
        </Link>
      </div>
      <Table striped bordered hover className="text-center mt-3">
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
          {products?.length > 0 &&
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>
                  <img
                    src={product.thumbnail}
                    style={{ height: '150px' }}
                    alt=""
                  />
                </td>
                <td>
                  <Link to={`/product-detail/${product.id}`}>
                    {product.title}
                  </Link>
                </td>
                <td>${product.price}</td>
                <td>
                  <div className="d-flex gap-2 justify-content-center">
                    <Link
                      className="btn btn-warning"
                      to={`/dashboard/edit-product/${product.id}`}
                    >
                      Edit
                    </Link>
                    <Button
                      onClick={() => {
                        setIsShowModalDelete(true)
                        setProductDelete(product)
                      }}
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ModalDeleteProduct
        show={isShowModalDelete}
        handleClose={() => setIsShowModalDelete(false)}
        update={getProducts}
        productDelete={productDelete}
      />
    </Container>
  )
}

export default Dashboard
