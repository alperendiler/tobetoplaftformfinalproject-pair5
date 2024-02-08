import { BaseService } from "../core/services/baseService";
import { AddCertificateRequest } from "../models/requests/certificate/addCertificateRequest";
import { UpdateCertificateRequest } from "../models/requests/certificate/updateCertificateRequest";
import { AddCertificateResponse } from "../models/responses/certificate/addCertificateResponse";
import { GetAllCertificateResponse } from "../models/responses/certificate/getAllCertificateResponse";
import { GetCertificateResponse } from "../models/responses/certificate/getCertificateResponse";
import { UpdateCertificateResponse } from "../models/responses/certificate/updateCertificateResponse";

class CertificateService extends BaseService<
	GetAllCertificateResponse,
	GetCertificateResponse,
	AddCertificateRequest,
	AddCertificateResponse,
	UpdateCertificateRequest,
	UpdateCertificateResponse
>{
    constructor() {
		super();
		this.apiUrl = "Certificates";
	}


}
export default new CertificateService();