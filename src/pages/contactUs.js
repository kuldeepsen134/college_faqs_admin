// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { STATIC_URL } from '../config/config'
// import moment from 'moment'

// const ContactUs = () => {

//     const [state, setState] = useState('')
//     const token = localStorage.getItem('token')


//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(`${STATIC_URL}/api/admin/constact-us/list`, {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//                 setState(response?.data?.data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };

//         fetchData()
//     }, [token])


//     return (
//         <>
//             <h2 className='ml-3'>Users List</h2>
//             <table class="table table-secondary table-striped mt-4 ml-2">
//                 <thead>
//                     <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Program Intrested In</th>
//                         <th scope="col">Mobile</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">City</th>
//                         <th scope="col">Message</th>
//                         <th scope="col">Date</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {state && state?.map((item, i) => {
//                         return (
//                             <tr>
//                                 <th scope="row">{item.id}</th>
//                                 <td>{item.name}</td>
//                                 <td>{item.programIntrestedIN}</td>
//                                 <td>{item.mobile}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.city}</td>
//                                 <td>{item.message}</td>
//                                 <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
//                             </tr>
//                         )

//                     })}
//                 </tbody>
//             </table>

//         </>
//     )
// }

// export default ContactUs

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { STATIC_URL } from '../config/config';
import moment from 'moment';

const ContactUs = () => {
  const [state, setState] = useState('');
  const [filteredData, setFilteredData] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${STATIC_URL}/api/admin/constact-us/list`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setState(response?.data?.data);
        setFilteredData(response?.data?.data); // Set filteredData initially with all data
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, [token]);

  const handleFilterChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (!searchTerm) {
      setFilteredData(state); // If search term is empty, display all data
    } else {
      const filtered = state.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm) ||
          item.programIntrestedIN.toLowerCase().includes(searchTerm) ||
          item.email.toLowerCase().includes(searchTerm) ||
          item.city.toLowerCase().includes(searchTerm) ||
          item.message.toLowerCase().includes(searchTerm) ||
          moment(item.createdAt).format('DD/MM/YYYY').includes(searchTerm)
      );
      setFilteredData(filtered); // Filter data based on search term
    }
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    filterDataByDate(e.target.value, endDate);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
    filterDataByDate(startDate, e.target.value);
  };

  const filterDataByDate = (start, end) => {
    if (!start && !end) {
      setFilteredData(state);
    } else {
      const filtered = state.filter((item) => {
        const dateCondition =
          (!start || moment(item.createdAt).isSameOrAfter(start, 'day')) &&
          (!end || moment(item.createdAt).isSameOrBefore(end, 'day'));
        return dateCondition;
      });
      setFilteredData(filtered);
    }
  };

  return (
    <>
      <h2 className='ml-3'>Users List</h2>
      <div className='ml-3 mt-3'>
        {/* <input
          type='text'
          placeholder='Search...'
          onChange={handleFilterChange}
        /> */}
        <label className='ml-3'>Start Date:</label>
        <input
          type='date'
          value={startDate}
          onChange={handleStartDateChange}
          className='ml-2'
        />
        <label className='ml-3'>End Date:</label>
        <input
          type='date'
          value={endDate}
          onChange={handleEndDateChange}
          className='ml-2'
        />
      </div>
      <table className='table table-secondary table-striped mt-4 ml-2'>
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
          {filteredData &&
            filteredData.map((item, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.programIntrestedIN}</td>
                  <td>{item.mobile}</td>
                  <td>{item.email}</td>
                  <td>{item.city}</td>
                  <td>{item.message}</td>
                  <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ContactUs;
