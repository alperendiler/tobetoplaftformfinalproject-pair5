import { AxiosResponse } from 'axios';
import { UpdateStudentLanguageResponse } from '../models/responses/studentLanguage/updateStudentLanguageResponse';
import { UpdateStudentLanguageRequest } from '../models/requests/studentLanguageRequest.ts/updateStudentLanguageRequest';
import { AddStudentLanguageResponse } from '../models/responses/studentLanguage/addStudentLanguageResponse';
import { AddStudentLanguageRequest } from '../models/requests/studentLanguageRequest.ts/addStudentLanguageRequest';
import { GetStudentLanguageResponse } from '../models/responses/studentLanguage/getStudentLanguageResponse';
import { GetAllStudentLanguageResponse } from '../models/responses/studentLanguage/getAllStudentLanguageResponse';
import { BaseService } from "../core/services/baseService";
import axiosInstance from '../core/interceptors/axiosInterceptor';

class StudentLanguageService extends BaseService<
GetAllStudentLanguageResponse,
GetStudentLanguageResponse,
AddStudentLanguageRequest,
AddStudentLanguageResponse,
UpdateStudentLanguageRequest,
UpdateStudentLanguageResponse
>{
constructor() {
    super();
    this.apiUrl = "StudentLanguages";
}

GetListByStudent(pageIndex: number, pageSize: number, studentId: string): Promise<AxiosResponse<GetAllStudentLanguageResponse, any>> {
    return axiosInstance.get<GetAllStudentLanguageResponse>('StudentLanguages/getlistbystudent'+`?Index=${pageIndex}&Size=${pageSize}&StudentId=${studentId}`);
}
}

export default new StudentLanguageService();