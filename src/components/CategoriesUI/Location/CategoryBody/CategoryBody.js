import React from 'react'
import Card from "react-bootstrap/Card";

const CategoryBody = ({categoryId , setCategoryId, categoryName, setCategoryName}) => (
    <Card.Body>
        <div style={{textAlign: 'center'}}>
            <button className='btn btn-primary' onClick={() => {
                setCategoryId(categoryId)
                setCategoryName(categoryName)
            }}>
                Manage
            </button>
        </div>
    </Card.Body>
)

export default CategoryBody

