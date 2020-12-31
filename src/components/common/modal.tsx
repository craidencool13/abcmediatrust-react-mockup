import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal, selectModalVisibility, selectModalContent } from 'src/store';

export const CommonModal = () => {
  const dispatch = useDispatch();
  const modalVisible = useSelector(selectModalVisibility);
  const modalContent = useSelector(selectModalContent);

  return (
    <Modal show={modalVisible} onHide={() => dispatch(hideModal())}>
        <Modal.Header closeButton>
          {(modalContent && modalContent.title) && 
            modalContent.title.map((title, i) => <Modal.Title key={i}>{title}</Modal.Title>)
          }
        </Modal.Header>
        <Modal.Body>
          {(modalContent && modalContent.content) && 
            modalContent.content.map((content) => content)
          }
        </Modal.Body>
        <Modal.Footer>
          {(modalContent && modalContent.buttons) && 
            modalContent.buttons.map((buttons, i) => {
              return (
                <Button variant={buttons.variant} key={i} onClick={buttons.onClick}>
                  {buttons.label}
                </Button>
              )
            })
          }
        </Modal.Footer>
      </Modal>
  )
}
