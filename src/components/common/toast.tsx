import React from 'react'
import { Toast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { hideAlert, selectAlertVisibility, selectAlertContent } from 'src/store';

export const CommonToast = () => {
  const dispatch = useDispatch();
  const alertVisible = useSelector(selectAlertVisibility);
  const alertContent = useSelector(selectAlertContent);

  if(!alertContent && !alertVisible) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="alert-container"
    >
      <Toast
        onClose={() => dispatch(hideAlert())}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
        }}
      >
      <Toast.Header>
        <strong className="mr-auto">{alertContent.title}</strong>
      </Toast.Header>
      <Toast.Body>{alertContent.message}</Toast.Body>
    </Toast>
    </div>
  )
}
