'use client'

import React from 'react'
import { useEffect } from 'react'
import {gql,useQuery} from '@apollo/client'

const GETNOTEDATA = gql`
query note {
   GetNote{
    id
    title
    body
   }
}
`


const GetNote = () =>{
     const {data,loading,error} = useQuery(GETNOTEDATA)
     console.log(data?.GetNote)
    
    return (
        <>
        <p>This is note</p>
         {data?.GetNote.map((data)=>{
            return (
            <ul key={data.id}>
                <li>Title - {data.title}</li>
                <li>Body - {data.body}</li>
            </ul>
            )
         })}
        </>
    )
}





export default GetNote