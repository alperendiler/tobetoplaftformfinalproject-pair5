export interface getAllAnnouncementResponse{
    id:string,
    type: string  ,
    organization: string  ,
    title:string ,
    description: string  ,
    isRead:boolean  
   }
   export interface getAllAnnouncementResponse{
    items : getAllAnnouncementResponse[]; 
} 