export interface GetAllStudentLanguageResponse{
    id: string,
    studentId: string,
    languageId: string,
    languageName: string,
    languageLevelId: string,
    languageLevel:string,
   }

export interface GetAllStudentLanguageResponse{
    items: GetAllStudentLanguageResponse[]
}