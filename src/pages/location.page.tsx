import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import {getLocations, selectLocationState, showModal, hideModal, deleteLocation } from 'src/store';
import {IModalContent} from 'src/interfaces';
import { TableRow, CommonLoader } from 'src/components'

export const Location = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {loading, locations} = useSelector(selectLocationState);
  
  useEffect(() => {
    dispatch(getLocations());
  }, [])

  const viewDetail = id => {
    history.push(`/details/${id}`);
  };

  const updateDetail = id => {
    history.push(`/edit/${id}`);
  }

  const confirmRemove = (id) => {
    const modalContent: IModalContent = {
      title: ['Confrim'],
      content: ['Are you sure you want to remove item?'],
      buttons: [
        {
          label: 'Confirm',
          onClick: () => removeModal(id),
          variant: 'danger',
        },
        {
          label: 'Cancel',
          onClick: () => dispatch(hideModal()),
          variant: 'secondary',
        }
      ]
    }
    dispatch(showModal({ modalContent }))
  }

  const removeModal = (id) => {
    dispatch(hideModal())
    dispatch(deleteLocation({id, goBack: false}));
  }

  return (
    <div className="location-container">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col" className="text-center">ID</th>
            <th scope="col" className="text-center">Location</th>
            <th scope="col" className="text-center">Description</th>
            <th scope="col" className="text-center">Manage</th>
          </tr>
        </thead>
        <tbody>
          {(!loading && locations) && locations.map((location) => <TableRow {...{location, viewDetail, confirmRemove, updateDetail}} />)}
        </tbody>
      </table>
      {(loading && !locations) && <CommonLoader />}
    </div>
  );
}