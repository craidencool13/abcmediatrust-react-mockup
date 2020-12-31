import React from 'react'

export const CardDetails = ({activeLocation}) => {
  
  if(!activeLocation) return null;

  return (
    <div className="card-body">
      <h5 className="card-title">{activeLocation.location}</h5>
      <p className="card-text">{activeLocation.description}</p>
    </div>
  )
};
