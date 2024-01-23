
import axiosInstance from "../core/interceptors/axiosInterceptor";
import { AuthLoginRequest } from "../models/requests/auth/AuthLoginRequest";


class AuthService {
	async login(model : AuthLoginRequest) {
        const response = await axiosInstance.post("Auth/Login", model);
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

   /*getCurrentUser() {
	return JSON.parse(localStorage.getItem('user'));
}*/
}

export default new AuthService();