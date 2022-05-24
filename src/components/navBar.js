import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Modal from './modal';
import { SearchBar } from './searchBar';

export const NavBar = () => {
  const [showModal, setShowModal] = React.useState(false);
  const listMemes = useSelector(state => state.memes.allMeme);
  const dispatch = useDispatch();
  const ultimos = () => {
    dispatch({
      type: 'FILTER_MEME',
      payload: listMemes
  })
  }

  function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
}

  const aleatorio = () => {
    let randomMeme = [...listMemes]
    fisherYatesShuffle(randomMeme);
    dispatch({
      type: 'FILTER_MEME',
      payload: randomMeme
  })
  }
  return (
<nav className="flex items-center justify-around flex-wrap bg-gray-400 p-5">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
    <div className='logo'></div>
  </div>
  <div className="w-full h-full block flex-grow  lg:flex lg:items-center lg:w-auto">
    <div className="h-full text-sm lg:flex-grow flex flex-wrap justify-end items-center ">
      <div
        onClick={ultimos}
        href="/ultimos" 
        className="pepe block h-full p-5 mt-4 lg:inline-block lg:mt-0 text-black hover:bg-black/50  mr-4 00">
        Últimos
      </div>
      <div
      onClick={aleatorio}

      href="/aleatorios" 
      className="pepe block p-5 mt-4 lg:inline-block lg:mt-0 text-black hover:bg-black/50 mr-4">
        Aleatorio
      </div>
      <div 
        onClick={()=>{setShowModal(true)}}
        className="pepe block p-5 mt-4 lg:inline-block lg:mt-0 text-black hover:bg-black/50 mr-4">
        Crear
      </div>
    </div>
    <div
    className='flex justify-end'>
      <SearchBar />
    </div>
  </div>
    {showModal ? <Modal 
      setShowModal={setShowModal}
    /> : null}
</nav>
  )
}
