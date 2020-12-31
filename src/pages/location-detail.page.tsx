import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from "react-router-dom";

import {
  getActiveLocation, 
  selectLocationState, 
  deleteLocation, 
  showModal, 
  hideModal 
} from 'src/store';
import {IModalContent} from 'src/interfaces';
import {CommonLoader, CardDetails} from 'src/components'

export const LocationDetail = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const history = useHistory();
  const {activeLocation, loading} = useSelector(selectLocationState);
  
  useEffect(() => {
    dispatch(getActiveLocation(id));
    console.log('id', id);
  }, [])

  useEffect(() => {
    console.log('active location', activeLocation);
  }, [activeLocation])

  const confirmRemove = () => {
    const modalContent: IModalContent = {
      title: ['Confrim'],
      content: ['Are you sure you want to remove item?'],
      buttons: [
        {
          label: 'Confirm',
          onClick: () => removeModal(activeLocation.id),
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
    dispatch(deleteLocation({id, goBack: true}));
  }

  const updateDetail = () => {
    history.push(`/edit/${activeLocation.id}`);
  }

  return (
    <div className="active-location">
     <div className="card">
      <div className="card-header d-flex justify-content-between">
        <div>
          <button type="button" className="btn btn-link text-dark" onClick={() => history.goBack()}>
            <i className="fa fa-arrow-left"></i>
          </button>
        </div>
        <div className="m-auto">
          Location Details
        </div>
        <div>
        <button type="button" className="btn btn-link text-dark" onClick={updateDetail}>
            <i className="fa fa-edit"></i>
          </button>
          <button type="button" className="btn btn-link text-dark" onClick={confirmRemove}>
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
      {(loading && !activeLocation) ? <CommonLoader /> : <CardDetails {...{activeLocation}} /> }
     </div>
    </div>
  );
}