import React from 'react'
import SideBar from '../components/SideBar'
import ContentWrapper from '../components/ContentWrapper'

function Home() {
    return (
        <div>
            <div id="wrapper">
                <SideBar />
                <ContentWrapper />
            </div>
        </div>
    )
}

export default Home