import "./App.css"
import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar/NavBar"
import Shop from "./pages/Shop/Shop"
import MonsterList from "./pages/MonsterList/MonsterList"
import MonsterDetails from "./pages/MonsterDetails/MonsterDetails"
import SpellSearch from "./pages/SpellSearch/SpellSearch"
import SpellDetails from "./pages/SpellDetails/SpellDetails"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="shop" element={<Shop />} />
        <Route path="monster-list" element={<MonsterList />} />
        <Route path="/monster" element={<MonsterDetails />} />
        <Route path="/spell-search" element={<SpellSearch />} />
        <Route path="/spell/:spellName" element={<SpellDetails />} />
      </Routes>
    </>
  )
}

export default App
