'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import SearchManufacturer from './SearchManufacturer'

const SearchButton = ({ extraClasses }: { extraClasses: string }) => {
  return (
    <button type="submit" className={`z-10 -ml-3 ${extraClasses}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Search button"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  )
}

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const [model, setModel] = useState('')
  const router = useRouter()

  function updateSearchParams(manufacturer: string, model: string) {
    const searchParams = new URLSearchParams(window.location.search)

    manufacturer
      ? searchParams.set('manufacturer', manufacturer)
      : searchParams.delete('manufacturer')
    model ? searchParams.set('model', model) : searchParams.delete('model')

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathname)
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (manufacturer === '' && model === '')
      return alert('Please enter a manufacturer or model to search')

    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase())
  }

  return (
    <form className="searchBar" onSubmit={handleSearch}>
      <div className="searchBar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton extraClasses="sm:hidden" />
      </div>

      <div className="searchBar__item">
        <Image
          src="/model-icon.png"
          alt=""
          width={22}
          height={22}
          className="absolute ml-4 h-[22px] w-[22px]"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={({ target }) => setModel(target.value)}
          placeholder="Tiguan"
          className="searchBar__input"
        />
        <SearchButton extraClasses="sm:hidden" />
      </div>
      <SearchButton extraClasses="max-sm:hidden" />
    </form>
  )
}

export default SearchBar
