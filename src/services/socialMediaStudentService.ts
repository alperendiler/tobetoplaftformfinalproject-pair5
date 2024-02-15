import { UpdateSocialMediaStudentResponse } from './../models/responses/SocialMediaStudentResponse.ts/updateSocialMediaStudentResponse';
import { UpdateSocialMediaStudentRequest } from './../models/requests/socialMediaStudent/updateSocialMediaStudentRequest';
import { AddSocialMediaStudentResponse } from './../models/responses/SocialMediaStudentResponse.ts/addSocialMediaStudentResponse';
import { AddSocialMediaStudentRequest } from './../models/requests/socialMediaStudent/addSocialMediaStudentRequest';
import { GetSocialMediaStudentResponse } from './../models/responses/SocialMediaStudentResponse.ts/getSocialMediaStudentResponse';
import { GetAllSocialMediaStudentResponse } from './../models/responses/SocialMediaStudentResponse.ts/getAllSocialMediaStudentResponse';
import axiosInstance from '../core/interceptors/axiosInterceptor';
import { AxiosResponse } from 'axios';

import { BaseService } from "../core/services/baseService";

class SocialMediaStudentService extends BaseService<
GetAllSocialMediaStudentResponse,
GetSocialMediaStudentResponse,
AddSocialMediaStudentRequest,
AddSocialMediaStudentResponse,
UpdateSocialMediaStudentRequest,
UpdateSocialMediaStudentResponse
>{
constructor() {
    super();
    this.apiUrl = "SocialMediaStudents";
}

GetListByUserId(pageIndex: number, pageSize: number, userId: string): Promise<AxiosResponse<GetAllSocialMediaStudentResponse, any>> {
    return axiosInstance.get<GetAllSocialMediaStudentResponse>('SocialMediaStudents/getlistByUserId'+`?Index=${pageIndex}&Size=${pageSize}&UserId=${userId}`);
}
getListByStudentId(pageIndex: number, pageSize: number,id: string|null): Promise<AxiosResponse<GetAllSocialMediaStudentResponse, any>> {
    return axiosInstance.get<GetAllSocialMediaStudentResponse>(this.apiUrl + "/getlistByStudentId"+`?Index=${pageIndex}&Size=${pageSize}`+"&id=" + id);
}
}

export default new SocialMediaStudentService();
