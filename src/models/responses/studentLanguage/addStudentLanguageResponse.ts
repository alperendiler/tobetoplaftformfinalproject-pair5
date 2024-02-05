export interface AddStudentLanguageResponse{
    id: string,
    studentId: string,
    languageId: string,
    language: {name:string},
    languageLevelId: string,
    languageLevel:{level:string}
   }