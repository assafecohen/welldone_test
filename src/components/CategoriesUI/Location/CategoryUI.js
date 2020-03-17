import React from 'react'
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CategoryBody from "./CategoryBody/CategoryBody";
import CategoryHeader from "./CategoryHeader/CategoryHeader";

const CategoryUI = ({category, setCategoryId, setCategoryName, id}) => (
        <Col xl='4' xs='12' sm='6' md='4' lg='4' style={{margin: '20px 0'}}>
            <Card bg='light' text={"secondary"}>
                <CategoryHeader categoryName={category.name}/>
                <CategoryBody
                    setCategoryName={setCategoryName}
                    setCategoryId={setCategoryId}
                    categoryName={category.name}
                    categoryId={id}/>
            </Card>
        </Col>
)


export default CategoryUI
