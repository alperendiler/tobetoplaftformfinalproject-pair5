export interface GetAllEducationResponse{
    id: string;
    studentId: string | null;
    educationalStatus: string;
    university: string;
    department: string;
    startYear: string ;
    graduationYear: string ;
    isContinued: boolean;
} export interface GetAllEducationResponse{
    items : GetAllEducationResponse[]; 
} 