import { AddCompetenceResponse } from '../models/responses/competence/addCompetenceResponse';
import { AxiosResponse } from 'axios';
import { UpdateCompetenceResponse } from './../models/responses/competence/updateCompetenceResponse';
import { UpdateCompetenceRequest } from './../models/requests/competence/updateCompetenceRequest';
import { AddCompetenceRequest } from './../models/requests/competence/addCompetenceRequest';
import { GetCompetenceResponse } from './../models/responses/competence/getCompetenceResponse';
import { GetAllCompetenceResponse } from './../models/responses/competence/getAllCompetenceResponse';
import { BaseService } from "../core/services/baseService";
import axiosInstance from '../core/interceptors/axiosInterceptor';



class CompetenceService extends BaseService<
GetAllCompetenceResponse,
GetCompetenceResponse,
AddCompetenceRequest,
AddCompetenceResponse,
UpdateCompetenceRequest,
UpdateCompetenceResponse
>{
constructor() {
    super();
    this.apiUrl = "Competences";
}

GetListByStudent(pageIndex: number, pageSize: number, studentId: string): Promise<AxiosResponse<GetAllCompetenceResponse, any>> {
    return axiosInstance.get<GetAllCompetenceResponse>('Competences/getlistByStudent'+`?Index=${pageIndex}&Size=${pageSize}&StudentId=${studentId}`);
}
}

export default new CompetenceService();
