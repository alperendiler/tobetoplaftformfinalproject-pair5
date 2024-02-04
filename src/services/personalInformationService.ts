import { UpdatePersonalInformationResponse } from './../models/responses/personalInformation/updatePersonalInformationResponse';
import { UpdatePersonalInformationRequest } from './../models/requests/personalInformation/updatePersonalInformationRequest';
import { GetPersonalInformationResponse } from './../models/responses/personalInformation/getPersonalInfırmationResponse';
import { AddPersonalInformationResponse } from './../models/responses/personalInformation/addPersonalInformationResponse';
import { GetAllPersonalInformationResponse } from './../models/responses/personalInformation/getAllPersonalInformationResponse';
import { BaseService } from "../core/services/baseService";
import { AddPersonalInformationRequest } from '../models/requests/personalInformation/addPersonalInformationRequest';

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
}
export default new PersonalInformationService();