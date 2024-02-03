import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BaseService } from "../core/services/baseService";
import { AddCourseRequest } from "../models/requests/course/addCourseRequest";
import { UpdateCourseRequest } from "../models/requests/course/updateCourseRequest";
import { AddCourseResponse } from "../models/responses/course/addCourseResponse";
import { GetAllCourseResponse } from "../models/responses/course/getAllCourseResponse";
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
    this.apiUrl = "Courses/getlist";
}


    }
    export default new CourseService();