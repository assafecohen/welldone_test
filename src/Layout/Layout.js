import React from 'react'
import Navigation from "../components/Naviagation/Navigation";

const Layout = props => {
    const { children } = props
    return (
        <div>
            <Navigation />
            <main style={{margin: '34px'}}>
                {children}
            </main>
        </div>
    )
}

export default Layout
