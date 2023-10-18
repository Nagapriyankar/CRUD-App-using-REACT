import React, { useEffect, useState } from 'react'
import { API_URL } from '../constants/URL'
import { Table, Header, Card, Button } from 'semantic-ui-react'
import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function Read() {

  const [APIdata, setAPIdata] = useState([])
  const navigate = useNavigate();

  /* using localstorage to pass data from read to home */
  const updateUser = ({ id, firstName, lastName, about, checked }) => { 
    localStorage.setItem('id', id)
    localStorage.setItem('firstName', firstName)
    localStorage.setItem('lastName', lastName)
    localStorage.setItem('about', about)
    localStorage.setItem('checked', checked)
    navigate('/edit-user')    
  }

/* added function to navigate  */
  const addNewUser = () => { 
    navigate('/create-user') 
  }

  /* axios call to delete data from API */
  const deleteUser = async (id) => {
    await axios.delete(API_URL + id) 
    console.log('Data deleted successfully')
    callAPIurl()
  } 
  
  /* axios call to retrieve data from API */
  const callAPIurl = async () => {
    const response = await axios.get(API_URL)
    setAPIdata(response.data)
   }

  useEffect(() => {
    callAPIurl()
  }, [])


  return (
    <div className='tableLook'>
      <h1>Read User List</h1>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>FIRST NAME</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>LAST NAME</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>ABOUT</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>STATUS</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>ACTION</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            APIdata.map(data => (
          <Table.Row key={data.id}>
                <Table.Cell singleLine textAlign='center'>{data.firstName }</Table.Cell>
                <Table.Cell singleLine textAlign='center'>{data.lastName}</Table.Cell>
                <Table.Cell singleLine textAlign='center'>{data.about}</Table.Cell>
                <Table.Cell singleLine textAlign='center'>{data.checked ? 'success' : 'failure'}</Table.Cell>
                <Table.Cell singleLine textAlign='center'><Button className="ui circular red button" onClick={() => deleteUser(data.id)}>Delete</Button><Button className="ui circular green button" onClick={() => { updateUser(data) } }>Update</Button></Table.Cell>
          </Table.Row>
          ))
          }
          
        </Table.Body>
      </Table>  
      <button className="ui circular green button" onClick={() => addNewUser()}>Add New User</button>
    </div>
   
  )
}

export default Read