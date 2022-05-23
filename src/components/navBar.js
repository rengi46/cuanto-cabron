import React from 'react'

export const NavBar = () => {
  return (
<nav class="flex items-center justify-around flex-wrap bg-gray-400 p-5">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">C.C.</span>
  </div>
  <div class="w-full h-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="h-full text-sm lg:flex-grow ">
      <a href="#responsive-header" class="block h-full mt-4 lg:inline-block lg:mt-0 text-black hover:text-white  mr-4">
        Ultimos
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        Aleatorio
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4">
        moderar
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Subir meme</a>
    </div>
  </div>
</nav>
  )
}
