import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CategoryUI from './Location/CategoryUI';
import DeleteModal from '../Modals/DeleteModal';
import instance from '../../utilities/axios/axios';
import EditCategoryModal from './EditCategoryModal/EditCategoryModal';

const CategoriesUI = props => {
  const {
    categories,
    getCategories,
    setCategoryId,
    categoryId,
    setCategoryName,
    categoryName,
    setEditModalStatus,
    deleteModalStatus,
    editModalStatus,
    setDeleteModalStatus
  } = props;
  const deleteCategory = () => {
    instance
      .delete(`/categories/${categoryId}.json`)
      .then(res => {
        setDeleteModalStatus(false);
        getCategories();
        setCategoryId('');
      })
      .catch(err => console.log(err));
  };
  return (
    <Container>
      <Row>
        {categories.map(category => (
          <CategoryUI
            category={category[1]}
            id={category[0]}
            key={category[0]}
            setCategoryName={setCategoryName}
            setCategoryId={setCategoryId}
          />
        ))}
      </Row>
      <EditCategoryModal
        id={categoryId}
        getCategories={getCategories}
        categoryName={categoryName}
        modalStatus={editModalStatus}
        setModalStatus={setEditModalStatus}
      />
      <DeleteModal
        action={deleteCategory}
        id={categoryId}
        modalStatus={deleteModalStatus}
        setModalStatus={setDeleteModalStatus}
      />
    </Container>
  );
};

export default CategoriesUI;
