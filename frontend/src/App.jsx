import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'
import { getUser } from '../utilities/users-service'
import TeaDetails from './pages/TeaDetails'
import TeaIndex from './pages/TeaIndex'
import CreateTea from './pages/CreateTea'
import EditTea from './pages/EditTea'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
  const [user, setUser] = useState[null]

  const logUser = (user) => (
    setUser(user)
  )
  
  return (
    <>
      <div className="App">
        <div className="container">
          {user ? 
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/teas' element={<TeaIndex />}/>
            <Route path='/teas/new' element={<CreateTea user={user} />}/>
            <Route path='/teas/:id' element={<TeaDetails user={user} />}/>
            <Route path='/teas/:id/edit' element={<EditTea user={user} />}/>
          </Routes>
          :
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/teas' element={<TeaIndex />}/>
            <Route path='/signup' element={<SignUp logUser={logUser} />} />
            <Route path='/login' element={<Login logUser={logUser} />} />
          </Routes>
          }
          <Nav user={user} />
        </div>
      </div>
    </>
  )
}

export default App
