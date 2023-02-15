import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { getDetails } from "../../services/api-calls"

const MonsterDetails = () => {
  const [monsterDetails, setMonsterDetails] = useState({})
  const location = useLocation()
  useEffect(() => {
    const fetchDetails = async () => {
      const monsterData = await getDetails(location.state.monster.url)
      setMonsterDetails(monsterData)
    }
    fetchDetails()
  }, [location.state.monster.url])

  return (
    <>
      <h3>Monster Details</h3>
      <img src="http://theoldreader.com/kittens/320/240/" alt="" />
      <h3>{monsterDetails.name}</h3>
      <h4>Size:{monsterDetails.size}</h4>
      <h4>Type:{monsterDetails.type}</h4>
      <h4>Alignment:{monsterDetails.alignment}</h4>
      <h4>
        Actions:
        {monsterDetails.actions?.length ? (
          <>
            {monsterDetails.actions.map((action) => (
              <div key={action.name}>
                <h4>{action.name}</h4>
                <h5>{action.desc}</h5>
                
              </div>
            ))}
          </>
        ) : (
          <p>This monster has no actions .</p>
        )}
      </h4>
    </>
  )
}

export default MonsterDetails
