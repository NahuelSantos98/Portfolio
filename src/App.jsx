import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className='h-full w-full bg-black'>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
