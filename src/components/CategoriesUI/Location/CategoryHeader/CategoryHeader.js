import React from 'react'
import Card from "react-bootstrap/Card";

const CategoryHeader = ({categoryName, categoriesCount = 0}) => (
    <Card.Header>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span>{categoryName}</span>
                <span>{categoriesCount}</span>
        </div>
    </Card.Header>
)

export default CategoryHeader
