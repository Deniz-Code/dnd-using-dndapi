import { useState, useEffect } from "react"
import { getMonsterList } from "../../services/api-calls"

const MonsterList = () => {
  const [monsterList, setMonsterList] = useState([])
// runs whenever our component is loaded for the first time
// or whenever the state of the component changes
//the array at the end makes it not refresh when the state changes
useEffect(()=>{
  const fetchMonsterList= async()=>{
    const monsterData= await getMonsterList()
    setMonsterList(monsterData.results)
  }
  fetchMonsterList()
},[])


  return (
    <>
      <h3>Monster List (Scary)</h3>
      {monsterList.length ? (
        <>
          {monsterList.map((monster) => (
            <div key={monster.index}>{monster.name}</div>
          ))}
        </>
      ) : (
        <>Loading Scary monsters...</>
      )}
    </>
  )
}

export default MonsterList
