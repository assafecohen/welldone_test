import React, { useState, useEffect } from 'react'
import AddCategoryModal from "../../components/CategoriesUI/AddCategoryModal/AddCategoryModal";
import CategoriesHeader from "../../components/CategoriesUI/CategoriesHeader/CategoriesHeader";
import CategoriesUI from "../../components/CategoriesUI/CategoriesUI";
import instance from "../../utilities/axios/axios";

const Categories = props => {
    const [categories, setMyCategories] = useState([]);
    const [loadingCategories, setLoadingCategories] = useState(false)
    const [deleteModalStatus, setDeleteModalStatus] = useState(false)
    const [editModalStatus, setEditModalStatus] = useState(false)
    const [addModalStatus, setAddModalStatus] = useState(false)
    const [categoryName, setCategoryName] = useState('')
    const [categoryId, setCategoryId] = useState('')
    console.log(categoryName)
    const getCategories = () => {
        setLoadingCategories(true)
        instance
            .get('/categories.json')
            .then(res => {
                const { data } = res
                console.log(data)
                setMyCategories(data ? Object.entries(data) : [])
                setLoadingCategories(false)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
            getCategories()
    }, [])
    return (
        <div >
            <CategoriesHeader
                setDeleteModalStatus={setDeleteModalStatus}
                setEditModalStatus={setEditModalStatus}
                setAddModalStatus={setAddModalStatus}
                categoryName={categoryName}
                categoryId={categoryId}/>
            <CategoriesUI
                categoryId={categoryId}
                editModalStatus={editModalStatus}
                setEditModalStatus={setEditModalStatus}
                setDeleteModalStatus={setDeleteModalStatus}
                deleteModalStatus={deleteModalStatus}
                categoryName={categoryName}
                getCategories={getCategories}
                setCategoryName={setCategoryName}
                setCategoryId={setCategoryId}
                categories={categories}/>
            <AddCategoryModal
            getCategories={getCategories}
            modalStatus={addModalStatus}
            setModalStatus={setAddModalStatus}
            />
        </div>
    )
}

export default Categories
