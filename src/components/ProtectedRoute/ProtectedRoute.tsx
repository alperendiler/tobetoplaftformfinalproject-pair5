import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

type Props = {
	children: any;
};

const ProtectedRoute = (props: Props) => {
	const navigate = useNavigate();
	useEffect(() => {
		let token = localStorage.getItem("user");
		if (!token) {
			navigate("/");
		}
	}, []);

	return <>{props.children}</>;
};

export default ProtectedRoute;