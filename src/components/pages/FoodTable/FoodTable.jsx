// src/components/ManageFood.js
import  { useState, useEffect } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
//import 'react-table-6/react-table.css';

const FoodTable =() =>{
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server.
    axios.get('http://localhost:5000/food')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const columns = [
    {
      Header: 'Food Name',
      accessor: 'foodName',
    },
    {
      Header: 'Location',
      accessor: 'location',
    },
    {
      Header: 'Quantity',
      accessor: 'quantity',
    },
    {
      Header: 'Date',
      accessor: 'date',
    },
    {
      Header: 'Actions',
      accessor: '_id',
      Cell: (props) => (
        <div>
          <button onClick={() => handleEdit(props.value)}>Edit</button>
          <button onClick={() => handleDelete(props.value)}>Delete</button>
        </div>
      ),
    },
  ];

  const handleEdit = (foodId) => {
    // Implement your edit logic here.
  };

  const handleDelete = (foodId) => {
    // Implement your delete logic here.
  };

  return (
    <div>
      <h1>Manage Food</h1>
      <ReactTable data={data} columns={columns} />
    </div>
  );
}

export default FoodTable;
