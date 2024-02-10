export interface GetAllAnnouncementResponse{
    id:string,
    type: string  ,
    organization: string  ,
    title:string ,
    createdDate: string  ,
    description: string  ,
    isRead:boolean  
   }
   export interface GetAllAnnouncementResponse{
    items : GetAllAnnouncementResponse[]; 
} 