import { BaseService } from "../core/services/baseService";
import { AddApplicationRequest } from "../models/requests/application/addApplicationRequest";
import { UpdateApplicationRequest } from "../models/requests/application/updateApplicationRequest";
import { AddApplicationResponse } from "../models/responses/application/addApplicationResponse";
import { GetAllApplicationResponse } from "../models/responses/application/getAllAplicationResponse";
import { GetApplicationResponse } from "../models/responses/application/getApplicationResponse";
import { UpdateApplicationResponse } from "../models/responses/application/updateApplicationResponse";

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


}
export default new ApplicationService();