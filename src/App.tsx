import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SingleProject from "./pages/SingleProject"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<SingleProject />} />
      </Routes>
    </BrowserRouter>
  )
}
