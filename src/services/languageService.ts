import { UpdateLanguageRequest } from './../models/requests/language/updateLanguageRequest';
import { UpdateLanguageResponse } from './../models/responses/language/updateLanguageResponse';
import { AddLanguageResponse } from './../models/responses/language/addLanguageResponse';
import { AddLanguageRequest } from './../models/requests/language/addLanguageRequest';
import { GetLanguageResponse } from './../models/responses/language/getLanguageResponse';
import { GetAllLanguageResponse } from './../models/responses/language/getAllLanguageResponse';
import { BaseService } from "../core/services/baseService";

class LanguageService extends BaseService<
GetAllLanguageResponse,
GetLanguageResponse,
AddLanguageRequest,
AddLanguageResponse,
UpdateLanguageRequest,
UpdateLanguageResponse
>{
constructor() {
    super();
    this.apiUrl = "Languages";
}
}

export default new LanguageService();
