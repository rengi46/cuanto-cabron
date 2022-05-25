import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getMeme } from '../redux/action/memeActions'
import { Meme } from './card'


export const ListaMemes = () => {
  const dispatch = useDispatch()
  const memes = useSelector(state=>state.memes.listMeme)
  const cargando = useSelector(state=>state.memes.cargando)
  React.useEffect(() => {
    if(cargando){
      dispatch(getMeme())
    }
  }, [cargando])
  return (
    <div className='w-2/4 m-auto p-2'>
        {memes && memes.map((meme,index)=>(
            <Meme 
              key={index}
              _id={meme._id}
              imgMeme={meme.url} 
              titulo={meme.title} 
              tags={meme.tags}/>
          ))}
    </div>
  )
}
