import React, { useEffect, useState } from 'react';
import instance from '../../../utilities/axios/axios';
import Modal from 'react-bootstrap/Modal';
import { setInputStyle } from '../../../utilities/sharedFunctions/sharedFunctions';
import Spinner from 'react-bootstrap/Spinner';

const EditCategoryModal = props => {
  const {
    id,
    categoryName,
    getCategories,
    modalStatus,
    setModalStatus
  } = props;
  const [category, setCategory] = useState({
    value: categoryName,
    isValid: false,
    touched: false
  });
  const [loading, setLoading] = useState(false);
  const submitEditedCategory = () => {
    setLoading(true);
    instance
      .put(`/categories/${id}.json`, { name: category.value })
      .then(res => {
        setModalStatus(false);
        setLoading(false);
        getCategories();
      })
      .catch(err => console.log(err));
  };
  useEffect(() => {
    setCategory({ ...category, value: categoryName });
  }, [categoryName]);
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
          onClick={submitEditedCategory}
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

export default EditCategoryModal;
