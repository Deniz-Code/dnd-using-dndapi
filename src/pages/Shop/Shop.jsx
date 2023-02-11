import { useState } from "react"
import { inventoryData } from "../../data/data"
import InventoryList from "../../components/InventoryList/InventoryList"

const Shop = () => {
  //create state variable
  const [inventory, setInventory] = useState(inventoryData)

const handleAddItem=()=>{
  const newItemOne={id:62555,name:"Magic Wand",cost:1,weight:2}
  const newItemTwo={id:63444,name:"Book of Spells",cost:15,weight:5}

  setInventory([newItemOne,newItemTwo,...inventory])
}

  return (
    <main>
      <h1>Shop</h1>
      <button onClick={handleAddItem}>Click Here</button>
      {/* before was inventoryData , now its inventory(state)so it changes */}
      <InventoryList inventory={inventory} />
    </main>
  )
}

export default Shop
