import { Path, FieldValues, UseFormRegister } from 'react-hook-form';
import { ValidationConstrainType } from '../../types/ValidationConstrainTypes';

export type PropTypes<T extends FieldValues> = {
	displayText: string;
	inputName: Path<T>;
	register: UseFormRegister<T>;
	errorMessage?: string | undefined;
	validationConstrain?: ValidationConstrainType;
};

function TextInputComponent<T extends FieldValues>({
	displayText,
	inputName,
	register,
	errorMessage = undefined,
	validationConstrain,
}: PropTypes<T>) {
	return (
		<div className="m-5">
			<label className="form-label">{displayText}</label>
			<input
				type="text"
				className="form-control is-invalid"
				{...register(inputName, { ...validationConstrain })}
			/>
			<p className="invalid-feedback">{errorMessage}</p>
		</div>
	);
}

export default TextInputComponent;
