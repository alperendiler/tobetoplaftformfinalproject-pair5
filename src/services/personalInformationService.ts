import { UpdatePersonalInformationResponse } from './../models/responses/personalInformation/updatePersonalInformationResponse';
import { UpdatePersonalInformationRequest } from './../models/requests/personalInformation/updatePersonalInformationRequest';
import { GetPersonalInformationResponse } from './../models/responses/personalInformation/getPersonalInfırmationResponse';
import { AddPersonalInformationResponse } from './../models/responses/personalInformation/addPersonalInformationResponse';
import { GetAllPersonalInformationResponse } from './../models/responses/personalInformation/getAllPersonalInformationResponse';
import { BaseService } from "../core/services/baseService";
import { AddPersonalInformationRequest } from '../models/requests/personalInformation/addPersonalInformationRequest';
import { AxiosResponse } from 'axios';
import axiosInstance from '../core/interceptors/axiosInterceptor';

class PersonalInformationService extends BaseService<
	GetAllPersonalInformationResponse,
	GetPersonalInformationResponse,
    AddPersonalInformationRequest,
    AddPersonalInformationResponse,
	UpdatePersonalInformationRequest,
	UpdatePersonalInformationResponse
>{
    constructor() {
		super();
		this.apiUrl = "PersonalInformations";
	}
	getByStudentId(id: string): Promise<AxiosResponse<GetPersonalInformationResponse, any>> {
		return axiosInstance.get<GetPersonalInformationResponse>(this.apiUrl + "/getbystudentid?Id=" + id);
	}
}
export default new PersonalInformationService();