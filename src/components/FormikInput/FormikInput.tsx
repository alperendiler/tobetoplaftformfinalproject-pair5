import {ErrorMessage, Field} from "formik";

type Props = {
	placeholder?:string,
    label?: string;
	name: string;
	type?: string;
	as?: string;
	rows?:number;
	cols?:number
	className?:string;
	disabled?:boolean;
};

const FormikInput = (props: Props) => {
	return (
		<div className="mb-3">
			{props.label && <label className="form-label">{props.label}</label>}
			<Field  placeholder={props.placeholder}
				name={props.name}
				type={props.type || "text"}
				className={`form-control ${props.className}`}
				as={props.as}
				row={props.rows}
				disabled={props.disabled}
			/>
			<ErrorMessage name={props.name}>
				{message => <p className="text-danger">{message}</p>}
			</ErrorMessage>
		</div>
	);
};

export default FormikInput;
