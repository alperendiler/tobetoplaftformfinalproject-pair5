export interface GetAllStudentLanguageResponse{
    id: string,
    studentId: string,
    languageId: string,
    language: {name:string},
    languageLevelId: string,
    languageLevel:{level:string}
   }

export interface GetAllStudentLanguageResponse{
    items: GetAllStudentLanguageResponse[]
}