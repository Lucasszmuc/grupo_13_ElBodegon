import React from 'react'
import SideBar from '../components/SideBar'
import ContentWrapper from '../components/ContentWrapper'
import ProductList from '../components/ProductList'

function Products() {
    return (
        <div>
            <div id="wrapper">
                <SideBar />
                <div className='product-list'>
                <h2 style={{margin:'30px 20px'}}>Lista de Productos</h2>
                <ProductList />
                </div>
            </div>
        </div>
    )
}

export default Products