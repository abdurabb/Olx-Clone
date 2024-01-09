import { useEffect, useContext } from 'react'
import './App.css';
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create'
import View from './Pages/ViewPost'

import { AuthContext, FirebseContext } from './store/Context'
import Post from './store/PostContext';

function App() {
  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div className="App">
      <Post>

        <Router>
          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/create' element={<Create />} />
            <Route path='/view' element={<View />} />
            

          </Routes>

        </Router>
      </Post>


    </div>
  );
}

export default App;
