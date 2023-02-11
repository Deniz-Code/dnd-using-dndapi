import { inventoryData } from "../../data/data"
import InventoryList from "../../components/InventoryList/InventoryList"

const Shop = () => {
  console.log("Inventory Data:", inventoryData)
  return (
    <main>
      <h1>Shop</h1>

      <InventoryList inventory={inventoryData} />
    </main>
  )
}

export default Shop
