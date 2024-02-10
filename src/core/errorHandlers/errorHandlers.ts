import toastr from "toastr";
import {BUSINESS_ERROR, VALIDATION_ERROR} from "./errorTypes";
import { toast } from 'react-toastify';


export const handleError = (error: any) => {
	if (error.code && error.code == "ERR_NETWORK") {
		toastr.error("Sunucuya ulaşılamıyor..");
	}

	if (error.response && error.response.data && error.response.data.type) {
		let type = error.response.data.type;

		switch (type) {
			case BUSINESS_ERROR:
				handleBusinessError(error.response.data);
				break;
			case VALIDATION_ERROR:
				handleValidationError(error.response.data);
				break;
			default:
				handleDefault(error);
				break;
		}
	}
};

export const handleBusinessError = (error: any) => {
	toast.error(error.detail, {
        position: "top-right",
        autoClose: 5000, // 5 saniye sonra otomatik olarak kapat
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
      });
};
export const handleValidationError = (error: any) => {
	console.log(error);

	Object.keys(error.errors).forEach(key => {
		toastr.error(`${key}: ${error.errors[key]}`);
	});
};
export const handleDefault = (error: any) => {
	console.log("Bilinmedik hata..");
};