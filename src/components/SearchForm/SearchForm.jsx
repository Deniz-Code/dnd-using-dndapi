import { useState } from "react"

const SearchForm = (props) => {
  const [formData, setFormData] = useState({ query: "" })
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  //we need to prevent the default behavior so it doesnt get refreshed
  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleSpellSearch(formData)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            autoComplete="off"
            name="query"
            type="text"
            value={formData.query}
            onChange={handleChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default SearchForm
