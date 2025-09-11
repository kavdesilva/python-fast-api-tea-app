import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../../utilities/users-service";

const Login = ({ logUser }) => {
    const navigate = useNavigate()

    const initialState = {
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState)
    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await login(formState)
        console.log(user)
        logUser(user)
        navigate('/')
    }

  return (
    <div className="login-form">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label><br/>
        <input type="text" 
          name="username"
          onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label><br/>
        <input type="password" 
          name="password"
          onChange={handleChange}/>
      </div>
      <button type='submit'>Log In</button>
      </form>
      <p>Not a user? <Link to='/signup'>Sign up here.</Link></p>
    </div>
  )
};

export default Login;
