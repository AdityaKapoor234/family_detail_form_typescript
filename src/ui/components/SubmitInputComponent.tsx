function SubmitInputComponent({ displayText }: { displayText: String }) {
	return (
		<button className="btn btn-primary" type="submit">
			{displayText}
		</button>
	);
}

export default SubmitInputComponent;
