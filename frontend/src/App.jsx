import { Routes, Route } from 'react-router-dom'
import './App.css'
import TeaDetails from './pages/TeaDetails'
import TeaIndex from './pages/TeaIndex'
import CreateTea from './pages/CreateTea'
import EditTea from './pages/EditTea'
import Nav from './components/Nav'
import Home from './pages/Home'

function App() {
  return (
    <>
      <div className="App">
        <div className="container">
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/teas' element={<TeaIndex />}/>
            <Route path='/teas/new' element={<CreateTea />}/>
            <Route path='/teas/:id' element={<TeaDetails />}/>
            <Route path='/teas/:id/edit' element={<EditTea />}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
