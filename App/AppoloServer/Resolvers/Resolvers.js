
const Note = require('../../Modal/Note')

module.exports = {
   Query:{
    async  GetNote (_){
       const result = await Note.find()
       return result
    }
   },
   Mutation:{
    async createNote(_,{noteInput:{title,body}}){
        const DataSave = new Note({
            title:title,
            body:body
        })
        const result = await DataSave.save()
        console.log(result)
        return result
         }
   }
   
}


