import React from 'react'
import { Formik } from 'formik';
import InputUpdate from './inputFile/inputUpdate';

export const CreaMeme = () => {
    const [tags,settags]=React.useState([]);
  return (
    <Formik
    initialValues={{
        titulo: '',
        url: '',
        tags:""
    }}
    onSubmit={ (values, actions) => {
      
    }}
  >
    {(props) => (
      <form onSubmit={props.handleSubmit}>
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.TextPost}
            name="Titulo"
            
          />
          <div></div>
          <input
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.tags}
            name="tags"
          />
          <button onClick={()=>{
            settags(tags.push(props.values.tags))
          }} >add tag</button>
        <InputUpdate
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            name="meme"
         />
            <button
              type="submit"
              sx={{
                color: '#fff',
                backgroundColor: '#cc33ff',
                border: 1 | 'solid' | '#fff',
                ':hover': {
                  color: '#cc33ff',
                  backgroundColor: '#fff',
                },
              }}
            >
              Publicar
            </button>
      </form>
    )}
  </Formik>
  )
}
