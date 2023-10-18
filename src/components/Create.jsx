import React, { useState } from 'react'
import { API_URL } from '../constants/URL'
import { Form, Button, Checkbox } from 'semantic-ui-react'
import axios from 'axios'
import '../App.css'
import { useNavigate } from 'react-router-dom'


function Create() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [about, setAbout] = useState('')
  const [checked, setChecked] = useState(false)
  const navigate = useNavigate();

  /* axios call to post data in the api */
  const postData = async () => {
    await axios.post(API_URL, {
      firstName, lastName, about, checked
    })
    /* input field refresh */
    setFirstName('')
    setLastName('')
    setAbout('')
    navigate('/users')
    console.log("Data created successfully")

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
      <Button className="ui circular green button" onClick={postData}>Submit</Button>
    </Form>
  )
}

export default Create