import {ErrorMessage, Field} from "formik";

type Props = {
	placeholder:string,
	name: string;
	type?: string; // type: string | undefined
};

const FormikInput = (props: Props) => {
	return (
		<div className="mb-3">
			<Field  placeholder={props.placeholder}
				name={props.name}
				type={props.type || "text"}
				className="form-control"
			/>
			<ErrorMessage name={props.name}>
				{message => <p className="text-danger">{message}</p>}
			</ErrorMessage>
		</div>
	);
};

export default FormikInput;