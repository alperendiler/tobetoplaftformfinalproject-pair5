import { UpdateLanguageLevelResponse } from './../models/responses/languageLevel/updateLanguageLevelResponse';
import { UpdateLanguageLevelRequest } from '../models/requests/languageLevel/updateLanguageLevelRequest';
import { AddLanguageLevelResponse } from './../models/responses/languageLevel/addLanguageLevelResponse';
import { AddLanguageLevelRequest } from './../models/requests/languageLevel/addLanguageLevelRequest';
import { GetLanguageLevelResponse } from './../models/responses/languageLevel/getLanguageLevelResponse';
import { GetAllLanguageLevelResponse } from './../models/responses/languageLevel/getAllLanguageLevelResponse';

import { BaseService } from "../core/services/baseService";


class LanguageLevelService extends BaseService<
GetAllLanguageLevelResponse,
GetLanguageLevelResponse,
AddLanguageLevelRequest,
AddLanguageLevelResponse,
UpdateLanguageLevelRequest,
UpdateLanguageLevelResponse
>{
constructor() {
    super();
    this.apiUrl = "LanguageLevels";
}
}

export default new LanguageLevelService();
