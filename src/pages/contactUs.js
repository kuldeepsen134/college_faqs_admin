import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { STATIC_URL } from '../config/config'
import moment from 'moment'

const ContactUs = () => {

    const [state, setState] = useState('')
    const token = localStorage.getItem('token')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${STATIC_URL}/api/admin/constact-us/list`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setState(response?.data?.data);
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
                        <th scope="col">Name</th>
                        <th scope="col">Program Intrested In</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">City</th>
                        <th scope="col">Message</th>
                        <th scope="col">Date</th>

                    </tr>
                </thead>
                <tbody>
                    {state && state?.map((item, i) => {
                        return (
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.programIntrestedIN}</td>
                                <td>{item.mobile}</td>
                                <td>{item.email}</td>
                                <td>{item.city}</td>
                                <td>{item.message}</td>
                                <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>

        </>
    )
}

export default ContactUs