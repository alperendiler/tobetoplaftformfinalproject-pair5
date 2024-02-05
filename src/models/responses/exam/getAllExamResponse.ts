export interface GetAllExamResponse{
    id: string  ,
    studentId: string  ,
    title:string ,
    description: string  ,
   }   export interface GetAllExamResponse{
    items : GetAllExamResponse[]; 
} 