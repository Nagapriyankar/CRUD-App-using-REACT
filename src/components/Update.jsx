import React, { useEffect, useState } from 'react'
import { API_URL } from '../constants/URL'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Update() {

  const navigate = useNavigate();
  const [id, setId] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [about, setAbout] = useState('')
  const [checked, setChecked] = useState(false)

  useEffect(() => { 
    setId(localStorage.getItem('id'))
    setFirstName(localStorage.getItem('firstName'))
    setLastName(localStorage.getItem('lastName'))
    setAbout(localStorage.getItem('about'))
    setChecked(checked)
  }, [])

  const updateUser = async() => {
    await axios.put(API_URL + id, { firstName, lastName, about, checked })
    console.log('Data updated successfully')
    navigate('/users')
   }

  return (
    <Form className='form'>
      <Form.Field>
        <label>First Name:&nbsp;&nbsp;&nbsp;</label>
        <input
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder='First Name here...' />
      </Form.Field><br />
      <Form.Field>
        <label>Last Name:&nbsp;&nbsp;&nbsp;</label>
        <input
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder='Last Name here...' />
      </Form.Field><br />

      <Form.TextArea
        label='About:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
        value={about}
        onChange={e => { setAbout(e.target.value) }}
        placeholder='Tell us more about you...' /><br />
      <Form.Checkbox
        label='&nbsp;&nbsp;Registration completed'
        onChange={() => setChecked(!checked)} /><br />
      <Button onClick={updateUser}>Submit</Button>
    </Form>
  )
}

export default Update