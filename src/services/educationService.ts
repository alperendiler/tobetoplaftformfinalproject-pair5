import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BaseService } from "../core/services/baseService";
import { AddEducationRequest } from "../models/requests/education/addEducationRequest";
import { UpdateEducationRequest } from "../models/requests/education/updateEducationRequest";
import { AddEducationResponse } from "../models/responses/education/addEducationResponse";
import { GetAllEducationResponse } from "../models/responses/education/getAllEducationResponse";
import { GetEducationResponse } from "../models/responses/education/getEducationResponse";
import { UpdateEducationResponse } from "../models/responses/education/updateEducationResponse";

class CourseService extends BaseService<
GetAllEducationResponse,
GetEducationResponse,
AddEducationRequest,
AddEducationResponse,
UpdateEducationRequest,
UpdateEducationResponse
>{ 
    constructor() {
    super();
    this.apiUrl = "Educations";
}
getListStudentId(pageIndex: number, pageSize: number,id: string|null): Promise<AxiosResponse<GetAllEducationResponse, any>> {
    return axiosInstance.get<GetAllEducationResponse>(this.apiUrl + "/getliststudentid"+`?Index=${pageIndex}&Size=${pageSize}`+"&id=" + id);
}


    }
    export default new CourseService();