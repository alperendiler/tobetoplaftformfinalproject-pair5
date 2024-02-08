export interface AddEducationRequest{
    studentId: string | null,
    educationalStatus : string,
    university:string
    department: string,
    startYear : Date|null,
    graduationYear:Date|null,
    isContinued:boolean

}

