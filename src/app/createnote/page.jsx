'use client'

import React from 'react'
import {useState} from 'react'
import {gql,useMutation} from '@apollo/client'

const CREATECONTACT = gql`
mutation CreateNote($noteInput: InputNote) {
    createNote(noteInput: $noteInput) {
      id
      title
      body
    }
  }
`


const CreateNote = () =>{
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [createNote] = useMutation(CREATECONTACT)

    const handleTitle = (e) =>{
        setTitle(e.target.value)
    }

    const handleBody = (e) =>{
        setBody(e.target.value)
    }

    const handleClick = (e) =>{
        e.preventDefault()
      createNote({
        variables:{noteInput:{title:title,body:body}}
      })
      setTitle('')
      setBody('')
     

    }
    return (
        <>
        <form>
            <label>Title</label>
            <input type='text' placeholder='Title' value={title} onChange={handleTitle} />
            <label>Body</label>
            <input type='text' placeholder='Body' value={body} onChange={handleBody}/>
            <button onClick={handleClick}>Submit</button>

        </form>
        </>
    )
}



export default CreateNote