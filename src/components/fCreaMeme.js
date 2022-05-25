import React from 'react'
import { useFormik } from 'formik';
import { getDownloadURL, uploadBytes, ref} from "firebase/storage";
import { storage } from "../firebase/firebase";
import InputUpdate from './inputFile/inputUpdate';
import { Input } from './input';
import { Button } from './button';
import { useDispatch } from 'react-redux';
import { addMeme } from '../redux/action/memeActions';

export const CreaMeme = ({close}) => {
  const dispatch = useDispatch()
    const [tags,settags]=React.useState([]);
    const [chek,setchek]=React.useState(false);

    const chanchek = () => {
        setchek(!chek);
    }
    const formik = useFormik({
      initialValues:{
        titulo: '',
        meme: '',
        tags:''
      },
      onSubmit :async values => {
        if(chek){
          const fileName= ref(storage, values.meme.name);
          await uploadBytes(fileName, values.meme)
          var url = await getDownloadURL(fileName)
        }
        const data ={
          title: values.titulo,
          url: chek?url:values.meme,
          tags: tags,
          user:"roger"
        }
        dispatch(addMeme(data))
        close()
      }
    });
  return (
  
      <form onSubmit={formik.handleSubmit}
      className="w-full flex items-center justify-center flex-col">
          <Input
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.titulo}
            name="titulo"
            placeholder=' '
          />
            <div className='w-full h-auto bg-slate-300 p-2 rounded-lg m-3'>
              {tags.length>0 &&tags.map((tag,index)=>{
                return <span key={index} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>
              })}
              <div className='flex items-center justify-start'>
                <Input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.tags}
                  name="tags"
                  placeholder=" "
                />
                <button
                className='bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4  my-2 mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-200'
                type='button'
                onClick={()=>{
                  settags([...tags,formik.values.tags])
                  formik.values.tags=""
                }} >add</button>
              </div>
            </div>
            <div>
              <label htmlFor="checkbox">{chek ?"Subir meme":"url meme"}</label>
            <input 
              type="checkbox" 
              value={chek}
              onChange={chanchek} />
            </div>
            {
              chek ?
                <InputUpdate
                  onChange={(e) => {
                    formik.handleChange(e);
                    formik.setFieldValue('meme', e.target.files[0]);
                  }}
                  onBlur={formik.handleBlur}
                  name="meme"
                />
              :
                <Input
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.meme}
                  name="meme"
                  placeholder=" "
                />
            }
        
            <Button
              name={'Crear'}
              type="submit"
            >
              Publicar
            </Button>
      </form>
  )
}
