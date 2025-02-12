import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Bizhaqimizda from './pages/Bizhaqimizda/Bizhaqimizda'
import News from './pages/News/News'
import Teachers from './pages/Teachers/Teachers'
import Contact from './pages/Contact/Contact'
import DarsLavhalar from './pages/DarsLavhalar/DarsLavhalar'
function App() {

  return (
<div>

<Navbar/>  

<Routes>

<Route path='/' element={<Home/>} />
<Route path='/Bizhaqimizda' element={<Bizhaqimizda/>} />
<Route path='/News' element={<News/>} />
<Route path='/teachers' element={<Teachers/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/DarsLavhalar' element={<DarsLavhalar/>}/>
</Routes>

<Footer/>

</div>
  )
}

export default App
