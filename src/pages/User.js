import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { STATIC_URL } from '../config/config'

const UsersList = () => {
    const [users, setUsers] = useState('')
    const token = localStorage.getItem('token')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${STATIC_URL}/api/admin/users/list`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setUsers(response?.data?.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchData()
    }, [token])


    return (
        <>
            <h2 className='ml-3'>Users List</h2>
            <table class="table table-secondary table-striped mt-4 ml-2">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Profile</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users?.map((user, i) => {
                        return (
                            <tr>
                                <th scope="row">{user.id}</th>
                                <td><img src={user.profile_url && `${STATIC_URL}/images/${user.profile_url}`} className='profileImage' /></td>
                                <td>{user.name}</td>
                                <td>{user.mobile}</td>
                                <td>{user.email}</td>
                            </tr>
                        )

                    })}


                </tbody>
            </table>

        </>
    )
}

export default UsersList