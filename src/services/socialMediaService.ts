import { UpdateSocialMediaResponse } from './../models/responses/socialMedia/updateSocialMediaResponse';
import { UpdateSocialMediaRequest } from './../models/requests/socialMedia/updateSocialMediaRequest';
import { AddSocialMediaResponse } from './../models/responses/socialMedia/addSocialMediaResponse';
import { AddSocialMediaRequest } from './../models/requests/socialMedia/addSocialMediaRequest';
import { GetSocialMediaResponse } from './../models/responses/socialMedia/getSocialMediaResponse';
import { GetAllSocialMediaResponse } from './../models/responses/socialMedia/getAllSocialMediaResponse';

import { BaseService } from "../core/services/baseService";


class SocialMediaService extends BaseService<
GetAllSocialMediaResponse,
GetSocialMediaResponse,
AddSocialMediaRequest,
AddSocialMediaResponse,
UpdateSocialMediaRequest,
UpdateSocialMediaResponse
>{
constructor() {
    super();
    this.apiUrl = "SocialMedias";
}
}

export default new SocialMediaService();
