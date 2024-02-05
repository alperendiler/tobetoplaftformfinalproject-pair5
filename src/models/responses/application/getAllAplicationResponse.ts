export interface GetAllApplicationResponse{
    id:string ,
    studentId: string  ,
    description: string  ,
    isAccepted:boolean  
   }
   export interface GetAllApplicationResponse{
    items : GetAllApplicationResponse[]; 
} 