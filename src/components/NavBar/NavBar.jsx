import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <img
        src="/images/noxitulll.png"
        alt="logo"
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
        className="App-logo"
      />
      <Link to="/shop">Shop</Link>
      <Link to="/monster-list">Scary Monsters</Link>
      <Link to="/spell-search">Search for Spells</Link>
    </header>
  )
}

export default NavBar
