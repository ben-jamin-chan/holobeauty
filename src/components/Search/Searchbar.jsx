import React, { useState } from 'react'
import { IoMdSearch } from "react-icons/io"
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <form onSubmit={handleSearch}>
    <div className="relative group sm:block">
      <input 
      type="text" 
      placeholder=" Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="font-normal rounded border border-black h-9 dark:text-black" 
      />
      <button type='submit'>
      <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
      </button>
    </div>
    </form>
  )
}

export default Searchbar
