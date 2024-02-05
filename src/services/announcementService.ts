import { BaseService } from "../core/services/baseService";
import { AddAnnouncementRequest } from "../models/requests/announcement/addAnnouncementRequest";
import { UpdateAnnouncementRequest } from "../models/requests/announcement/updateAnnouncementRequest";
import { AddAnnouncementResponse } from "../models/responses/announcement/addAnnouncementResponse";
import { GetAnnouncementResponse } from "../models/responses/announcement/getAnnouncementResponse";
import { getAllAnnouncementResponse } from "../models/responses/announcement/getAllAnnouncementResponse";
import { UpdateAnnouncementResponse } from "../models/responses/announcement/updateAnnouncementResponse";


class AnnouncementService extends BaseService<
	getAllAnnouncementResponse,
	GetAnnouncementResponse,
	AddAnnouncementRequest,
	AddAnnouncementResponse,
	UpdateAnnouncementRequest,
	UpdateAnnouncementResponse
>{
    constructor() {
		super();
		this.apiUrl = "Announcements";
	}


}
export default new AnnouncementService();