import { Routes, Route } from 'react-router-dom'
import './App.css'
import LoginRegister from './pages/LoginRegisterPage/LoginRegister.tsx'

function App() {

  return (
    <Routes>
        <Route path="/" element={<LoginRegister />} />
        {/*<Route path="/todo" element={<TodoApp />}/>*/}
    </Routes>
  )
}

export default App