import { Link, Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import Details from "./components/Details"
import Create from "./components/Create"
const App = () => {
  const { search, pathname } = useLocation()
  return (

    <div className="h-screen w-screen flex" >
      {(pathname != '/' || search.length > 0) && <Link to="/" className="text-red-400 absolute left-20 mt-5" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
      </Link>}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  )
}

export default App