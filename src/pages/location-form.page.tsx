import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Form, Button, Col} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import {
  getActiveLocation, 
  selectLocationState, 
  createLocation, 
  updateLocation, 
  showModal, 
  hideModal 
} from 'src/store';
import {IModalContent} from 'src/interfaces';
import {CommonLoader} from 'src/components'

export const LocationForm = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const { register, errors, handleSubmit, reset } = useForm();
  const {activeLocation, loading} = useSelector(selectLocationState);

  useEffect(() => {
    if(id) {
      dispatch(getActiveLocation(id));
    }
  }, []);

  useEffect(() => {
    if(activeLocation) {
      reset({
        location: activeLocation.location,
        description: activeLocation.description,
      })
    }
  }, [activeLocation])


  const confirmSubmit = data => {
    console.log('form data', data);
    const modalContent: IModalContent = {
      title: ['Confrim'],
      content: [`Are you sure you want to ${id ? 'update': 'add'} location?`],
      buttons: [
        {
          label: 'Confirm',
          onClick: () => submit(data),
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

  const submit = (data) => {
    dispatch(hideModal());
    if(id){
      data['id'] = id;
      dispatch(updateLocation(data));
    }else{
      dispatch(createLocation(data));
    }
  }

  useEffect(() => {
    console.log('errors', errors);
  }, [errors])

  return (
    <div className="location-form">

      {loading ? 
      <CommonLoader /> : 
        <Form onSubmit={handleSubmit(confirmSubmit)}>

          <Form.Group controlId="exampleForm.location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" placeholder="" ref={register({ required: true, maxLength: 30 })} />
            {errors.location && <span className="error">Location is required</span>}
          </Form.Group>

          <Form.Group controlId="exampleForm.description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" name="description" rows={4} ref={register({ required: true, maxLength: 200 })} />
            {errors.location && <span className="error">Description is required</span>}
          </Form.Group>

          <Col xs="auto" className="text-center">
              <Button variant="primary" type="submit">
                {id ? 'Update' :  'Submit'}
              </Button>
          </Col>
        </Form>
      }
    </div>
  )
};
