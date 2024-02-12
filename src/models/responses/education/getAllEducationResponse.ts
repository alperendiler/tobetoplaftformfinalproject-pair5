export interface GetAllEducationResponse{
    id: string;
    studentId: string | null;
    educationalStatus: string;
    university: string;
    department: string;
    startYear: Date ;
    graduationYear: Date ;
    isContinued: boolean;
} export interface GetAllEducationResponse{
    items : GetAllEducationResponse[]; 
} 