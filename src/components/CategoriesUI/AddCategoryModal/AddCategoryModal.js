import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { setInputStyle } from '../../../utilities/sharedFunctions/sharedFunctions';
import instance from '../../../utilities/axios/axios';
import Spinner from 'react-bootstrap/Spinner';

const AddCategoryModal = props => {
  const { modalStatus, setModalStatus, getCategories } = props;
  const [category, setCategory] = useState({
    value: '',
    isValid: false,
    touched: false
  });
  const [loading, setLoading] = useState(false);
  const submitCategory = () => {
    setLoading(true);
    instance
      .post('/categories.json', { name: category.value })
      .then(res => {
        setLoading(false);
        setModalStatus(false);
        setCategory({ value: '', isValid: false, touched: false });
        getCategories();
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    setCategory({ value: '', isValid: false, touched: false });
  }, [modalStatus]);
  return (
    <Modal show={modalStatus} onHide={() => setModalStatus(false)}>
      <Modal.Header closeButton={true}>Add Category</Modal.Header>
      <Modal.Body>
        <label>Location</label>
        <input
          onChange={event => {
            const { value } = event.target;
            const isValid = value.trim() !== '';
            setCategory({ value, isValid, touched: true });
          }}
          value={category.value}
          placeholder='Enter Location...'
          className={setInputStyle(category)}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          className='btn btn-secondary'
          onClick={() => setModalStatus(false)}
        >
          Cancel
        </button>
        <button
          disabled={!category.isValid}
          className='btn btn-primary'
          onClick={submitCategory}
        >
          <span style={{ marginRight: loading ? '5px' : '0' }}>Submit</span>
          {loading ? (
            <Spinner animation='border' variant='light' size='sm' />
          ) : null}
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategoryModal;
