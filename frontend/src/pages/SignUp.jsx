import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { signUp } from "../../utilities/users-api";

const SignUp = ({logUser}) => {

    let navigate = useNavigate()
    const initialState = {
        name: '',
        email: '',
        password: ''
    }

    const [formState, setFormState] = useState(initialState)
    
      const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value })
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = await signUp(formState)
        logUser(user)
        navigate('/')
    }

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username:</label><br/>
        <input type="text" 
          name="username"
          onChange={handleChange}/>
      </div>
      <div className="form-group">
        <label htmlFor="username">Email:</label><br/>
        <input type="text" 
          name="email"
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
      <p>Already a user? <Link to='/login'>Log in here.</Link></p>
    </div>
  )
};

export default SignUp;
