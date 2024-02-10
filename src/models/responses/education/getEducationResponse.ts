export interface GetEducationResponse{
    id:string,
    studentId: string,
    educationalStatus : string,
    university:string
    department: string,
    startYear : Date,
    graduationYear:Date,
    isContinued:boolean
}