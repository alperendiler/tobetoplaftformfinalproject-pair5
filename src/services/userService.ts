import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BaseService } from "../core/services/baseService";
import { AddUserRequest } from "../models/requests/user/addUserRequest";
import { UpdateUserRequest } from "../models/requests/user/updateUserRequest";
import { AddUserResponse } from "../models/responses/user/addUserResponse";
import { GetAllUserResponse } from "../models/responses/user/getAllUserResponse";
import { GetUserDetailResponse } from "../models/responses/user/getUserDetailResponse";
import { UpdateUserResponse } from "../models/responses/user/updateUserResponse";

class userService extends BaseService<
	GetAllUserResponse,
	GetUserDetailResponse,
	AddUserRequest,
	AddUserResponse,
	UpdateUserRequest,
	UpdateUserResponse
>{
    constructor() {
		super();
		this.apiUrl = "Users";
	}
   
    }
    export default new userService();

