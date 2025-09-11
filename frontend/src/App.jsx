import { Routes, Route } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
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
  // const user = {
  //   id: 7,
  //   username: "arthur",
  //   email: "art@gmail.com"
  // }

  // const user = null

  const logUser = (user) => (
    setUser(user)
  )
  
  return (
    <>
      <div className="App">
        <div className="container">
          <Nav user={user} />
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
        </div>
      </div>
    </>
  )
}

export default App
