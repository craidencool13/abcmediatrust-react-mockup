/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const TableRow = ({location, viewDetail, confirmRemove, updateDetail}) => {
  
  if(!location) return null;

  return (
    <tr key={location.id}>
      <th scope="row">{location.id}</th>
      <td>{location.location}</td>
      <td>{location.description}</td>
      <td className="d-flex justify-content-around">
      <button onClick={() => viewDetail(location.id)} className="btn btn-link text-dark">
          <i className="fa fa-eye"></i>
        </button>
        <button onClick={() => updateDetail(location.id)} className="btn btn-link text-dark">
          <i className="fa fa-edit"></i>
        </button>
        <button onClick={() => confirmRemove(location.id)} className="btn btn-link text-dark">
          <i className="fa fa-trash"></i>
        </button>
      </td>
    </tr>
  )
};
