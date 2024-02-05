export interface AddStudentLanguageRequest{
    studentId: string,
    languageId: string,
    language: {name:string},
    languageLevelId: string,
    languageLevel:{level:string}
   }