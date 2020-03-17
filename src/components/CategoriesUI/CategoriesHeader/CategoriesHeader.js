import React from 'react'
import {PageTitle} from "../../../styles/styledComponents/Titles/PageTitle/PageTitle";
import {PageAction} from "../../../styles/styledComponents/Titles/PageTitle/PageAction/PageAction";
import Fade from "react-bootstrap/Fade";

const CategoriesHeader = ({categoryId, setAddModalStatus, setDeleteModalStatus, setEditModalStatus}) => {
    return (
        <div style={{display: 'flex'}}>
            <PageTitle>Categories</PageTitle>
            <PageAction>
                <button
                    onClick={() => setAddModalStatus(true)}
                    className='btn btn-outline-primary'>
                    New Category
                </button>
            </PageAction>
             <Fade in={categoryId !== ''}>
                   <div style={{display: 'flex'}}>
                          <PageAction>
                        <button
                            className='btn btn-outline-success'>
                            View
                        </button>
                    </PageAction>
                          <PageAction>
                        <button
                            onClick={() => setEditModalStatus(true)}
                            className='btn btn-outline-warning'>
                            Edit
                        </button>
                    </PageAction>
                          <PageAction>
                        <button
                            onClick={() => setDeleteModalStatus(true)}
                            className='btn btn-outline-danger'>
                            Delete
                        </button>
                    </PageAction>
                     </div>
             </Fade>

        </div>
    )
}

// <div style={{display: 'flex', justifyContent: 'space-between'}}>
// <button className='btn btn-danger' onClick={() =>  {
//     setCategoryId(categoryId)
//     setDeleteModalStatus(true)
// }}>
// Delete
// </button>
// <button className='btn btn-warning' onClick={() => {
//     setCategoryId(categoryId)
//     setEditCategoryName(categoryName)
//     setEditModalStatus(true)
// }}>
//     Edit
// </button>
// <button className='btn btn-primary'>View</button>
// </div>
export default CategoriesHeader
