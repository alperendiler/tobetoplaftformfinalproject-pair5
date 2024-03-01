import { AxiosResponse } from "axios";
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BaseService } from "../core/services/baseService";
import { AddCourseRequest } from "../models/requests/course/addCourseRequest";
import { UpdateCourseRequest } from "../models/requests/course/updateCourseRequest";
import { AddCourseResponse } from "../models/responses/course/addCourseResponse";
import { GetAllCourseResponse } from "../models/responses/course/getAllCourseResponse";
import { GetCourseDetailResponse } from "../models/responses/course/getCourseDetailResponse";
import { GetCourseResponse } from "../models/responses/course/getCourseResponse";
import { UpdateCourseResponse } from "../models/responses/course/updateCourseResponse";


class CourseService extends BaseService<
    GetAllCourseResponse,
    GetCourseResponse,
    AddCourseRequest,
    AddCourseResponse,
    UpdateCourseRequest,
    UpdateCourseResponse
>{
    constructor() {
        super();
        this.apiUrl = "Courses";
    }

    GetCourseDetail(Id: string): Promise<AxiosResponse<GetCourseDetailResponse, any>> {
        return axiosInstance.get<GetCourseDetailResponse>('Courses/getDetail' + `?Id=${Id}`);
    }
    GetPublicCourseList(): Promise<AxiosResponse<GetAllCourseResponse, any>> {
        return axiosInstance.get<GetAllCourseResponse>('Courses/getPublicCourseList');
    }
}


export default new CourseService();