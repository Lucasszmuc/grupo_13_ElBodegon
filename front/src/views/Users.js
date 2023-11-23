import React from 'react'
import SideBar from '../components/SideBar'
import UserList from '../components/UserList/UserList'
function Users() {
    return (
        <div>
            <div id="wrapper">
                <SideBar />
                <UserList />
            </div>
        </div>
    )
}

export default Users