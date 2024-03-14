import Home from "./components/Home"
import Login from "./components/Login"
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import NewCandidate from "./components/NewCandidate"
import CandidateDetails from "./components/CandidateDetails"
import EditDetails from "./components/EditDetails"
import About from "./components/About"


function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route path="home" element={<Home/>}>
        <Route index element={<About/>} />  
        <Route path="candidate/new" element={<NewCandidate/>} /> 
        <Route path="candidate/:id" element={<CandidateDetails/>} />
        <Route path="candidate/update/:id" element={<EditDetails/>} />
    </Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
