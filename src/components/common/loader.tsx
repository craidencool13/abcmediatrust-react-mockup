import React from 'react'
import { Spinner } from 'react-bootstrap';

export const CommonLoader = ({variant = 'secondary'}) => {
  return (
    <div className="loading-container m-auto">
        <Spinner  animation="border" variant={variant} />
    </div>
  )
}
