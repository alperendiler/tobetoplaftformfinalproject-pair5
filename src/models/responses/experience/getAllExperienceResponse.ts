export interface GetAllExperienceResponse{
    id:string,
    studentId: string  ,
    companyName:string ,
    position: string  ,
    sector: string  ,
    isContinued:string ,
    startDate: string  ,
    endDate: string  ,
    jobDescription:string ,
    city:string 

   } export interface GetAllExperienceResponse{
    items : GetAllExperienceResponse[]; 
} 