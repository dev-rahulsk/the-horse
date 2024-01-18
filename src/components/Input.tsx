import React from 'react'

const Input = (props: {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  setSearchedValue: React.Dispatch<React.SetStateAction<string>>
  collapse: React.SetStateAction<boolean>
  titleData: {
    id: number;
    title: string;
  }[]
}
) => {
  const {
    inputValue,
    setInputValue,
    setSearchedValue,
    collapse,
    titleData,
  } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.toLowerCase());
  }
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchedValue(inputValue)
      e.preventDefault();
    }
  }

  return (
    <>
      <input
        type="text"
        list='search'
        id='searchInput'
        autoComplete='off'
        className="mb-3 text-2xl w-full border-none focus:outline-none "
        value={inputValue}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        placeholder={
          collapse === false ?
            '' :
            'Search'
        }
      />
      <datalist id="search" className=''>
        {
          titleData.map((val) => {
            if (val.title.toLowerCase().search(inputValue) !== -1) {
              return (
                <option key={val.id} value={val.title} />
              )
            }
            return null;
          })
        }
      </datalist>
    </>
  )
}

export default Input
