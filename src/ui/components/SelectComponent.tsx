import { Path, FieldValues, UseFormRegister } from 'react-hook-form';
import { ValidationConstrainType } from '../../types/ValidationConstrainTypes';

type Options = {
	optionName: string;
	optionValue: string | number;
};

export type PropTypes<T extends FieldValues, V> = {
	displayText: string;
	inputName: Path<T>;
	register: UseFormRegister<T>;
	errorMessage?: string | undefined;
	validationConstrain?: ValidationConstrainType;
	options: Options[];
	stateValue?: V;
	onChangeHandler?: (arg: V) => void;
};

function SelectComponent<T extends FieldValues, V>({
	displayText,
	inputName,
	register,
	validationConstrain,
	options,
	stateValue = undefined,
	onChangeHandler = () => {},
}: PropTypes<T, V>) {
	return (
		<div className="m-5">
			<label className="form-label">{displayText}</label>
			<select
				className="form-select"
				{...register(inputName, { ...validationConstrain })}
				onChange={(e) => {
					if (stateValue) {
						const newState = stateValue;
						newState[inputName] = e.target.value;
						onChangeHandler(newState);
					}
				}}
			>
				{options.map((item) => {
					return <option value={item.optionValue}>{item.optionName}</option>;
				})}
			</select>
		</div>
	);
}

export default SelectComponent;
