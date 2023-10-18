import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import '../App.css'




function Home() {

    const navigate = useNavigate();
    /* menu bar with 3 menu items */
    return (
    
      <div className="ui three item menu navmenu">
          <a className="active item" onClick={() => navigate('/')}>Home</a>
          <a className="item" onClick={() => navigate('/users')}>User List</a>
          <a className="item" onClick={() => navigate('/create-user') }>Create User</a>
      </div>
   
    
  )
}

export default Home