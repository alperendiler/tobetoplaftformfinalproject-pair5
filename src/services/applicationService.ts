import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { AddApplicationRequest } from "../models/requests/application/addApplicationRequest";
import { UpdateApplicationRequest } from "../models/requests/application/updateApplicationRequest";
import { AddApplicationResponse } from "../models/responses/application/addApplicationResponse";
import { GetAllApplicationResponse } from "../models/responses/application/getAllAplicationResponse";
import { GetApplicationResponse } from "../models/responses/application/getApplicationResponse";
import { UpdateApplicationResponse } from "../models/responses/application/updateApplicationResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class ApplicationService extends BaseService<
	GetAllApplicationResponse,
	GetApplicationResponse,
	AddApplicationRequest,
	AddApplicationResponse,
	UpdateApplicationRequest,
	UpdateApplicationResponse
>{
    constructor() {
		super();
		this.apiUrl = "Applications";
	}
	getListByStudentId(pageIndex: number, pageSize: number,id: string|null): Promise<AxiosResponse<GetAllApplicationResponse, any>> {
		return axiosInstance.get<GetAllApplicationResponse>(this.apiUrl + "/getlistByStudentId"+`?Index=${pageIndex}&Size=${pageSize}`+"&id=" + id);
	}
	

}
export default new ApplicationService();