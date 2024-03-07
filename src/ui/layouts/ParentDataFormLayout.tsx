import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import ButtonComponent from '../components/ButtonComponent';
import SelectComponent from '../components/SelectComponent';
import SubmitInputComponent from '../components/SubmitInputComponent';
import TextInputComponent from '../components/TextInputComponent';

const options = [
	{ optionName: 'Father', optionValue: 'Father' },
	{ optionName: 'Mother', optionValue: 'Mother' },
	{ optionName: 'Sister', optionValue: 'Sister' },
	{ optionName: 'Brother', optionValue: 'Brother' },
];

type Inputs = {
	firstName: string;
	lastName: string;
	relation: string;
};

type RelativeType = {
	id: string;
	firstName: string;
	lastName: string;
	relation: string;
	isValid: boolean;
};

type RelativeFormPropTypes = {
	relative: RelativeType;
	editStateFunc: (arg0: RelativeType) => void;
};

// #################
// # HELPER LAYOUT #
// #################

function RelativeForm({ relative, editStateFunc }: RelativeFormPropTypes) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="m-5">
				<TextInputComponent
					displayText="First Name"
					inputName="firstName"
					register={register}
					validationConstrain={{ required: 'This field is required' }}
					errorMessage={errors.firstName?.message?.toString()}
					onChangeHandler={editStateFunc}
					stateValue={relative}
				/>

				<TextInputComponent
					displayText="Last Name"
					inputName="lastName"
					register={register}
					validationConstrain={{ required: 'This field is required' }}
					errorMessage={errors.lastName?.message?.toString()}
					onChangeHandler={editStateFunc}
					stateValue={relative}
				/>

				<SelectComponent
					displayText="Relation"
					inputName="relation"
					register={register}
					options={options}
					stateValue={relative}
					onChangeHandler={editStateFunc}
				/>

				{relative.isValid ? (
					<p>
						<i className="bi bi-check-circle"></i>
						Can be saved
					</p>
				) : null}

				<SubmitInputComponent displayText="Save Details" />
			</div>
		</form>
	);
}

// #################
// # HELPER LAYOUT #
// #################

function InformationLayout({
	relativeDetails,
}: {
	relativeDetails: RelativeType[];
}) {
	const [userDetails, setUserDetails] = useState<{
		firstName: string;
		lastName: string;
		email: string;
		contactDetails: number;
	}>();

	useEffect(() => {
		const savedUserDetails = localStorage.getItem('userDetails');
		if (savedUserDetails) setUserDetails(JSON.parse(savedUserDetails));
	}, []);

	return (
		<div className="m-5">
			<h1>User Details</h1>
			<p>{`Fisrt Name ${userDetails?.firstName}`}</p>
			<p>{`Last Name ${userDetails?.lastName}`}</p>
			<p>{`email ${userDetails?.email}`}</p>
			<p>{`contactDetails ${userDetails?.contactDetails}`}</p>

			<h1>Relative Details</h1>
			{relativeDetails.map((item, index) => {
				return (
					<>
						<h2>{`Relative ${index + 1}`}</h2>
						<p>{`First Name: ${item.firstName}`}</p>
						<p>{`Last Name:${item.lastName}`}</p>
						<p>{`Relation: ${item.relation}`}</p>
					</>
				);
			})}
		</div>
	);
}

// ##################
// # MAIN COMPONENT #
// ##################
function ParentDataFormLayout() {
	const [relatives, setRelatives] = useState([
		{
			id: uuidv4(),
			firstName: '',
			lastName: '',
			relation: 'Father',
			isValid: false,
		},
	]);

	const addRelatives = () => {
		setRelatives((relatives) => [
			...relatives,
			{
				id: uuidv4(),
				firstName: '',
				lastName: '',
				relation: 'Brother',
				isValid: false,
			},
		]);
	};

	const editRelative = (relative: RelativeType) => {
		const localRalatives = relatives;
		const updatedRelatives = localRalatives.map((item) => {
			if (item.id === relative.id) {
				if (item.firstName && item.lastName) {
					return { ...item, isValid: true };
				}
				return { ...relative, isValid: false };
			}
			return item;
		});

		setRelatives(updatedRelatives);
	};

	const deletedRelatives = (id: string) => {
		const updatedRelatives = relatives.filter((relative) => relative.id !== id);
		if (updatedRelatives.length > 0) setRelatives(updatedRelatives);
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
									<RelativeForm editStateFunc={editRelative} relative={item} />

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

			<ButtonComponent
				onClickHandler={addRelatives}
				args={null}
				displayText="Add Relative"
			/>

			<ButtonComponent onClickHandler={submitForm} displayText="Submit" />
		</div>
	);
}

export default ParentDataFormLayout;
