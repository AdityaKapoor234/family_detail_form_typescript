import { Path, FieldValues, UseFormRegister } from 'react-hook-form';
import { ValidationConstrainType } from '../../types/ValidationConstrainTypes';

type Options = {
	optionName: string;
	optionValue: string | number;
};

export type PropTypes<T extends FieldValues> = {
	displayText: string;
	inputName: Path<T>;
	register: UseFormRegister<T>;
	errorMessage?: string | undefined;
	validationConstrain?: ValidationConstrainType;
	options: Options[];
};

function SelectComponent<T extends FieldValues>({
	displayText,
	inputName,
	register,
	validationConstrain,
	options,
}: PropTypes<T>) {
	return (
		<>
			<label className="form-label">{displayText}</label>
			<select
				className="form-select"
				{...register(inputName, { ...validationConstrain })}
			>
				{options.map((item) => {
					return <option value={item.optionValue}>{item.optionName}</option>;
				})}
			</select>
		</>
	);
}

export default SelectComponent;
