import React from 'react'
import eliminar from '../assets/img/eliminar.png'
import editar from '../assets/img/editar.png'
import { useDispatch } from 'react-redux'
import { deleteMeme } from '../redux/action/memeActions'
import Modal from './modal'

export const Meme = ({imgMeme,titulo,tags,_id}) => {
    const [showModal, setShowModal] = React.useState(false);
    const dispatch = useDispatch()
    const eliminarMeme = () => {
        dispatch(deleteMeme(_id))
    }
    const editMeme = () => {
        setShowModal(true)
    }
return (
    <div className="max-w-lg w-2/3 min-w-fit rounded overflow-hidden shadow-lg p-5 bg-white my-4 m-auto">
        <div className="px-6 py-4 bg-gray-200 rounded-lg mb-3">
            <div className="font-bold text-xl mb-2">{titulo}</div>
        </div>
        <img className="w-full" src={imgMeme}/>
        <div className="px-6 pt-4 pb-2 flex justify-between">
            <div className='mr-4'>
                {
                    tags.map((tag,index)=>(
                        <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
                    ))
                }
            </div>
            <div>
                <button
                onClick={editMeme}
                ><img className='h-6 w-6 m-2' src={editar}/></button>

                <button
                onClick={()=>{eliminarMeme()}}
                ><img className='h-6 w-6 m-2' src={eliminar}/></button>

            </div>
        </div>
        {showModal && <Modal
            edit={{meme:imgMeme,titulo:titulo,tag:tags,id:_id}}
            setShowModal={setShowModal}/>}
    </div>
)
}
