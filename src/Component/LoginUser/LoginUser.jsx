import React, { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContext'

const LoginUser = () => {
    const {isLoggedIn, setIsLoggedIn} = useContext(LoginContext)
    const handleSubmit =()=>{
        setIsLoggedIn(true)
        console.log(isLoggedIn,"from login user");
    }
  return (
    <div>
      <button onClick={handleSubmit}>Submit {isLoggedIn}</button>
    </div>
  )
}

export default LoginUser
