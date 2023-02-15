import "./App.css"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Shop from "./pages/Shop/Shop"
import MonsterList from "./pages/MonsterList/MonsterList"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="shop" element={<Shop />} />
        <Route path="monster-list" element={<MonsterList />} />
      </Routes>
    </>
  )
}

export default App
