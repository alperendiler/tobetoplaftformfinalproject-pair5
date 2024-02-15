import { AxiosResponse } from 'axios';
import { UpdateCertificateRequest } from './../models/requests/certificate/updateCertificateRequest';
import { UpdateCertificateResponse } from './../models/responses/certificate/updateCertificateResponse';
import { AddCertificateResponse } from './../models/responses/certificate/addCertificateResponse';
import { AddCertificateRequest } from './../models/requests/certificate/addCertificateRequest';
import { GetCertificateResponse } from './../models/responses/certificate/getCertificateResponse';
import { GetAllCertificateResponse } from './../models/responses/certificate/getAllCertificateResponse';
import { BaseService } from "../core/services/baseService";
import axiosInstance from '../core/interceptors/axiosInterceptor';
import { strict } from 'assert';

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

GetListByStudent(pageIndex: number, pageSize: number, studentId: string): Promise<AxiosResponse<GetAllCertificateResponse, any>> {
    return axiosInstance.get<GetAllCertificateResponse>(this.apiUrl+'/getlistByStudentId'+`?Index=${pageIndex}&Size=${pageSize}&StudentId=${studentId}`);
}

UploadCertificate(formData:AddCertificateRequest):Promise<AxiosResponse<AddCertificateResponse,any>> {
    return axiosInstance.post(this.apiUrl+"/add",
       formData,
       {
         headers: {
           "Content-Type": "multipart/form-data",
         },
       }
     );
}

}

export default new CertificateService();
