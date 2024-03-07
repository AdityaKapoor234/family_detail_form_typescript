import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import EmailInputComponent from '../components/EmailInputComponent';
import SubmitInputComponent from '../components/SubmitInputComponent';
import TelInputComponent from '../components/TelInputComponent';
import TextInputComponent from '../components/TextInputComponent';

type Inputs = {
	firstName: string;
	lastName: string;
	email: string;
	contactDetails: string;
};

function UserDataFormLayout() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm<Inputs>();

	const navigate = useNavigate();

	useEffect(() => {
		const storedValues = localStorage.getItem('userDetails');
		if (storedValues) {
			const fieldValues = JSON.parse(storedValues);
			setValue('firstName', fieldValues.firstName);
			setValue('lastName', fieldValues.lastName);
			setValue('email', fieldValues.email);
			setValue('contactDetails', fieldValues.contactDetails);
		}
	}, [setValue]);

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		localStorage.setItem('userDetails', JSON.stringify(data));
		navigate('relatives');
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="m-5">
				<h1>Personel Details</h1>

				<TextInputComponent
					displayText="First Name"
					inputName="firstName"
					register={register}
					validationConstrain={{ required: 'This field is required' }}
					errorMessage={errors.firstName?.message?.toString()}
				/>

				<TextInputComponent
					displayText="Last Name"
					inputName="lastName"
					register={register}
					validationConstrain={{ required: 'This field is required' }}
					errorMessage={errors.lastName?.message?.toString()}
				/>

				<EmailInputComponent
					displayText="email"
					inputName="email"
					register={register}
					validationConstrain={{ required: 'This field is required' }}
					errorMessage={errors.email?.message?.toString()}
				/>

				<TelInputComponent
					displayText="Mobile Number"
					inputName="contactDetails"
					register={register}
					validationConstrain={{
						required: 'This field is required',
						minLength: {
							value: 10,
							message: 'Please enter a 10 digit mobile number',
						},
					}}
					errorMessage={errors.contactDetails?.message?.toString()}
				/>

				<SubmitInputComponent displayText="Next" />
			</div>
		</form>
	);
}

export default UserDataFormLayout;
