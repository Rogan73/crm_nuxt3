import { updateTaskInDatabase, deleteFromDatabase, moveTaskInDatabase } from '../dbupdate'

export default defineEventHandler(async (event) => {
 
  
    const body  = await readBody(event)
  
    //console.log('==body',body);
    
    let res

    try {
      if (body.action=='delete'){
      res=await deleteFromDatabase( body)
      }
      if (body.action=='update'){
      res=await updateTaskInDatabase( body)
      }
      if (body.action=='move'){
        res=await moveTaskInDatabase( body)
       }
  
      

      console.log('🔹 res '+body.action,res);

      return res //{ success: true }
    } catch (error) {
      console.error('Error updating board:', error)
      return createError({ statusCode: 500, statusMessage: 'Error updating board' })
    }
  })