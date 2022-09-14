import React from 'react'
import delSuccess from '../image/modal-information-icon.svg'

function ModalDelSuccess( {setModal} ) {
  return (
    <div className='modal-background' onClick={() => {
      setModal(false)
    }}>
        <div className='modal-delete-success' data-cy="modal-information">
            <img src={delSuccess} data-cy="modal-information-icon" alt="delete-success"></img>
            <h4 data-cy="modal-information-title">Activity berhasil dihapus</h4>
        </div>
    </div>
  )
}

export default ModalDelSuccess