type Options = {
	optionName: string;
	optionValue: string | number;
};

function SelectComponent({ options }: { options: Options[] }) {
	return (
		<select className="form-select">
			{options.map((item) => {
				return <option value={item.optionValue}>{item.optionName}</option>;
			})}
		</select>
	);
}

export default SelectComponent;
