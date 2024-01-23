import axios, { AxiosResponse } from 'axios';

class UserService {
	getAll(): Promise<AxiosResponse<GetAllProductsModel, any>> {
		
        return axiosInstance.get<GetAllProductsModel>("products");
	}

	getById(id: number) {
		return axiosInstance.get<ProductModel>("products/" + id);
	}

	delete(id: number) {
		return axiosInstance.delete<ProductModel>("products/" + id);
	}
}

