import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import dogs from '../data.js'
import Dogs from './Dogs'

function App() {
  return (
    <div className="App">
      <NavLink to="/dogs">
        <h1>Helloz. We have dogz. Click on them for more info.</h1>
      </NavLink>

      <Routes>
        <Route path="dogs">
          <Route index element={<Dogs dogs={dogs} />} />
          <Route path=":name" element={<Dogs dogs={dogs} />} />
        </Route>
        <Route path="*" element={<Navigate to="dogs" />} />
      </Routes>
    </div>
  )
}

export default App