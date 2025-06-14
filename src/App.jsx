
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Categories, Dashboard } from "./pages";
import Header from "./components/shared/Sidebar";
function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
