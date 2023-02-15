import { useState } from "react"



const SearchForm = () => {
  const[formData,setFormData]=useState({query:""})
  return (
    <>
      <div>
        <form>
          <input autoComplete="off" name="query" type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  )
}

export default SearchForm
