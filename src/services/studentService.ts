import { AxiosResponse } from "axios";
import { BaseService } from "../core/services/baseService";
import { AddStudentRequest } from "../models/requests/student/addStudentRequest";
import { UpdateStudentRequest } from "../models/requests/student/updateStudentRequest";
import { AddStudentResponse } from "../models/responses/student/addStudentResponse";
import { GetAllStudentResponse } from "../models/responses/student/getAllStudentResponse";
import { GetStudentResponse } from "../models/responses/student/getStudentResponse";
import { UpdateStudentResponse } from "../models/responses/student/updateStudentResponse";
import axiosInstance from "../core/interceptors/axiosInterceptor";

class StudentService extends BaseService<
	GetAllStudentResponse,
	GetStudentResponse,
    AddStudentRequest,
    AddStudentResponse,
	UpdateStudentRequest,
	UpdateStudentResponse
>{
    constructor() {
		super();
		this.apiUrl = "Students";
	}
	getByUserId(id: string): Promise<AxiosResponse<GetStudentResponse, any>> {
		return axiosInstance.get<GetStudentResponse>(this.apiUrl + "/getbyuserid?Id=" + id);
	}
}
export default new StudentService();