import { Path, FieldValues, UseFormRegister } from 'react-hook-form';
import { ValidationConstrainType } from '../../types/ValidationConstrainTypes';

export type PropTypes<T extends FieldValues> = {
	displayText: string;
	inputName: Path<T>;
	register: UseFormRegister<T>;
	errorMessage?: string | undefined;
	validationConstrain?: ValidationConstrainType;
};

function TelInputComponent<T extends FieldValues>({
	displayText,
	inputName,
	register,
	errorMessage,
	validationConstrain,
}: PropTypes<T>) {
	return (
		<div className="mb-3">
			<label className="form-label">{displayText}</label>
			<input
				type="tel"
				className="form-control is-invalid"
				{...register(inputName, { ...validationConstrain })}
			/>
			<p className="invalid-feedback">{errorMessage}</p>
		</div>
	);
}

export default TelInputComponent;
