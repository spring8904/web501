import { Button, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify'
import productServices from '../services/productServices'

const ModalDeleteProduct = ({ show, handleClose, productDelete, update }) => {
  const handleDelete = async () => {
    try {
      await productServices.delete(productDelete.id)
      toast.success('Delete successfully')
      handleClose()
      update()
    } catch (error) {
      toast.error(error.message || error)
      console.error(error)
    }
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete &quot;{productDelete.title}
        &quot;
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalDeleteProduct
