import { useState } from "react"
import SearchForm from "../../components/SearchForm/SearchForm"
import { spellSearch } from "../../services/api-calls"
import SpellCard from "../../components/SpellCard/SpellCard"

const SpellSearch = () => {
  const [spells, setSpells] = useState([])

  const handleSpellSearch = async (formData) => {
    const spellResults = await spellSearch(formData)
    console.log(spellResults)
    setSpells(spellResults.results)
  }
  return (
    <>
      <h3>Avada kada... wait wrong series</h3>
      <SearchForm handleSpellSearch={handleSpellSearch} />
      {spells.length ? (
        <>
          {spells.map((spell) => (
            <div key={spell.index}>
              <SpellCard spell={spell} />
            </div>
          ))}
        </>
      ) : (
        <h3>Search for a spell !</h3>
      )}
    </>
  )
}

export default SpellSearch
