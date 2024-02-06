export interface AddExperienceRequest{
    studentId:string ,
    companyName:string ,
    position: string  ,
    sector: string  ,
    isContinued:boolean ,
    startDate: Date| null  ,
    endDate: Date| null  ,
    jobDescription:string ,
    city:string 

   }