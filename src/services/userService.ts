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
		this.apiUrl = "User";
	}
    async getByUser() {
        try {
          const response = await axiosInstance.get("User/get", {
            headers: {
              Authorization: `Bearer `,
            },
          });
    
          // Handle the response as needed
          return response.data;
        } catch (error) {
          // Handle errors
          console.error("Error fetching user data:", error);
          throw error;
        }
      }
      
    }
    

