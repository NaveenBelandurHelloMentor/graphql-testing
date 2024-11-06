const {gql} = require('apollo-server-express')

module.exports = gql`
type GetNote {
    id:ID
    title:String
    body:String
}

input InputNote{
    title:String
    body:String
}



type Query {
    GetNote:[GetNote!]!
}

type Mutation {
    createNote(noteInput:InputNote):GetNote!
}
`

