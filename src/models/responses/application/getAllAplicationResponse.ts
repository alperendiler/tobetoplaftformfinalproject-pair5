export interface GetAllApplicationResponse{
    id:string ,
    StudentId: string  ,
    description: string  ,
    IsAccepted:boolean  
   }
   export interface GetAllApplicationResponse{
    items : GetAllApplicationResponse[]; 
} 