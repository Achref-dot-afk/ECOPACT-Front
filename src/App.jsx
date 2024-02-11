import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import FAQ from './pages/FAQ'
function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/profileForm" element={<Profile></Profile>}></Route>
      <Route path="/FAQ" element={<FAQ></FAQ>}></Route>
    </Routes>
  )
}

export default App
