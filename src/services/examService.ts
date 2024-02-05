import { BaseService } from "../core/services/baseService";
import { AddExamRequest } from "../models/requests/exam/addExamRequest";
import { UpdateExamRequest } from "../models/requests/exam/updateExamRequest";
import { AddExamResponse } from "../models/responses/exam/addExamResponse";
import { GetAllExamResponse } from "../models/responses/exam/getAllExamResponse";
import { GetExamResponse } from "../models/responses/exam/getExamResponse";
import { UpdateExamResponse } from "../models/responses/exam/updateExamResponse";

class ExamService extends BaseService<
GetAllExamResponse,
GetExamResponse,
AddExamRequest,
AddExamResponse,
UpdateExamRequest,
UpdateExamResponse
>{ 
    constructor() {
    super();
    this.apiUrl = "Courses";
}


    }
    export default new ExamService();