import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './App.css';

function App() {
  const columns = [
    {
      name: "Name",
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true
    },
    {
      name: 'Age',
      selector: row => row.age,
      sortable: true
    }
  ];
  const data = [
    {
      id : 1,
      name: "Aman Kumar",
      email: "amank876655@gmail.com",
      age: '21'
    },
    {
      id : 2,
      name: "Rohit Bajiya",
      email: "erbajiya@gmail.com",
      age: '22'
    },
    {
      id : 3,
      name: "Kunal Kumar",
      email: "kunal2346@gmail.com",
      age: '21'
    },
    {
      id : 4,
      name: "Abhishek Sharma",
      email: "abhishek4932@gmail.com",
      age: '22'
    },
    {
      id : 5,
      name: "Piyush Srivastava",
      email: "srivastava293@gmail.com",
      age: '21'
    },
    {
      id : 6,
      name: "Aditya Sharma",
      email: "aditya482@gmail.com",
      age: '23'
    },
    {
      id : 7,
      name: "Aman Kumar",
      email: "amank876655@gmail.com",
      age: '21'
    },
    {
      id : 8,
      name: "Piyush Srivastava",
      email: "srivastava293@gmail.com",
      age: '21'
    },
    {
      id : 9,
      name: "Aditya Sharma",
      email: "aditya482@gmail.com",
      age: '23'
    },
    {
      id : 10,
      name: "Kunal Kumar",
      email: "kunal2346@gmail.com",
      age: '21'
    },
    {
      id : 3,
      name: "Kunal Kumar",
      email: "kunal2346@gmail.com",
      age: '21'
    },
  ];
  const [recordData, setRecordData] = useState(data);
  function handleFilter(e) {
         const newData = recordData.filter(row => {
           return row.name.toLowerCase().includes(e.target.value.toLowerCase())
         })
         setRecordData(newData)
  }
  return (
    <div className='container mt-5'>
      <div className='text-end'>
        <label htmlFor="dataFilter">Filter The Data: </label>
        <input type="text" onChange={handleFilter} />
        </div>
      <DataTable
        columns = {columns}
        data = {recordData}
        selectableRows
        fixedHeader
        pagination
      ></DataTable>
    </div>
  );
}

export default App;
