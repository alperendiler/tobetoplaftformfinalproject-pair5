import { UpdateExperienceRequest } from './../models/requests/experience/updateExperienceRequest';
import { BaseService } from "../core/services/baseService";
import { AddExperienceRequest } from "../models/requests/experience/addExperienceRequest";
import { AddExperienceResponse } from "../models/responses/experience/addExperienceResponse";
import { GetAllExperienceResponse } from "../models/responses/experience/getAllExperienceResponse";
import { GetExperienceResponse } from "../models/responses/experience/getExperienceResponse";
import { UpdateExperienceResponse } from "../models/responses/experience/updateExperienceResponse";
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/interceptors/axiosInterceptor';


class ExperienceService extends BaseService<
GetAllExperienceResponse,
GetExperienceResponse,
AddExperienceRequest,
AddExperienceResponse,
UpdateExperienceResponse,
UpdateExperienceRequest
>{ 
    constructor() {
    super();
    this.apiUrl = "Experiences";
}
getListStudentId(pageIndex: number, pageSize: number,id: string): Promise<AxiosResponse<GetAllExperienceResponse, any>> {
    return axiosInstance.get<GetAllExperienceResponse>(this.apiUrl + "/getliststudentid"+`?Index=${pageIndex}&Size=${pageSize}`+"&id=" + id);
}


    }
    export default new ExperienceService();