function SubmitInputComponent({ displayText }: { displayText: string }) {
	return (
		<button className="btn btn-primary mt-3" type="submit">
			{displayText}
		</button>
	);
}

export default SubmitInputComponent;
