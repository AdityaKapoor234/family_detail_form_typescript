import EmailInputComponent from '../components/EmailInputComponent';
import SubmitInputComponent from '../components/SubmitInputComponent';
import TelInputComponent from '../components/TelInputComponent';
import TextInputComponent from '../components/TextInputComponent';

function UserDataFormLayout() {
	return (
		<>
			<form>
				<div className="m-5">
					<h1>Personel Details</h1>
					<TextInputComponent labelName="First Name" />
					<TextInputComponent labelName="Last Name" />
					<EmailInputComponent labelName="email" />
					<TelInputComponent labelName="Mobile No." />
					<SubmitInputComponent displayText="Next" />
				</div>
			</form>
		</>
	);
}

export default UserDataFormLayout;
