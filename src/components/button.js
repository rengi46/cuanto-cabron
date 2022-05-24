import React from 'react'

export const Button = ({name,type="button"}) => {
  return (
    <button className="text-green-500 border border-green-300 hover:bg-green-500 hover:text-white active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type={type}
      >
  {name}
</button>
  )
}
