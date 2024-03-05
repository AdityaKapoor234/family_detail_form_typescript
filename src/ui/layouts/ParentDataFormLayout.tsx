import { useState } from 'react';
import TextInputComponent from '../components/TextInputComponent';
import SelectComponent from '../components/SelectComponent';
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from '../components/ButtonComponent';

const options = [
	{ optionName: 'Father', optionValue: 'Father' },
	{ optionName: 'Mother', optionValue: 'Mother' },
	{ optionName: 'Sister', optionValue: 'Sister' },
	{ optionName: 'Brother', optionValue: 'Brother' },
];

function ParentDataFormLayout() {
	const [relatives, setRelative] = useState([
		{
			id: uuidv4(),
			firstName: '',
			lastName: '',
			relation: 'Brother',
		},
	]);

	const addRelatives = () => {
		setRelative((relatives) => [
			...relatives,
			{
				id: uuidv4(),
				firstName: '',
				lastName: '',
				relation: 'Brother',
			},
		]);
	};

	const deletedRelatives = (id: unknown) => {
		const updatedRelatives = relatives.filter((relative) => relative.id !== id);
		if (updatedRelatives.length > 0) setRelative(updatedRelatives);
	};

	return (
		<div className="m-5">
			<h1>Relatives Form</h1>
			<div className="accordion accordion-flush" id="accordionFlushExample">
				{relatives.map((item, index) => {
					return (
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target={`#${index}`}
								>
									{index + 1}
								</button>
							</h2>
							<div
								id={`${index}`}
								className="accordion-collapse collapse"
								data-bs-parent="#accordionFlushExample"
							>
								<div className="accordion-body">
									<TextInputComponent labelName="First Name" />
									<TextInputComponent labelName="Last Name" />
									<SelectComponent options={options} labelName="Relationship" />
									<ButtonComponent
										onClickHandler={deletedRelatives}
										args={item.id}
										displayText="Delete Relative"
									/>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{/* <button onClick={addRelatives}>Add Relative</button> */}
			<ButtonComponent
				onClickHandler={addRelatives}
				args={null}
				displayText="Add Relative"
			/>
		</div>
	);
}

export default ParentDataFormLayout;
