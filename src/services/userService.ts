import { AddUserResponse } from './../models/responses/user/addUserResponse';
import { GetUserDetailResponse } from './../models/responses/user/getUserDetailResponse';
import { GetAllUserResponse } from './../models/responses/user/getAllUserResponse';
import { AddUserRequest } from './../models/requests/user/addUserRequest';
import { UpdateUserResponse } from './../models/responses/user/updateUserResponse';
import { UpdateUserRequest } from './../models/requests/user/updateUserRequest';
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { BASE_API_URL } from "../environment/environment";
import {BaseService} from "../core/services/baseService";
import {AxiosResponse} from 'axios';


class UserService extends BaseService<
GetAllUserResponse,
GetUserDetailResponse,
AddUserRequest,
AddUserResponse,
UpdateUserRequest,
UpdateUserResponse
> {
	constructor() {
		super();
		this.apiUrl = "User";
	}

	getByFilter() {}

	async getUserDetail(): Promise<AxiosResponse<GetUserDetailResponse>> {
		try {
		  const response = await axiosInstance.get<GetUserDetailResponse>(`${this.apiUrl}/details`);
		  return response;
		} catch (error) {
		  // Hata yönetimi
		  console.error('Kullanıcı bilgileri alınamadı:', error);
		  throw error;
		}
	  }
	
}
export default new UserService();