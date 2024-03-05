type Options = {
	optionName: string;
	optionValue: string | number;
};

function SelectComponent({
	options,
	labelName,
}: {
	options: Options[];
	labelName: string;
}) {
	return (
		<>
			<label className="form-label">{labelName}</label>
			<select className="form-select">
				{options.map((item) => {
					return <option value={item.optionValue}>{item.optionName}</option>;
				})}
			</select>
		</>
	);
}

export default SelectComponent;
