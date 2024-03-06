export type PropType = {
	displayText: string;
};

function SubmitInputComponent({ displayText }: PropType) {
	return (
		<button className="btn btn-primary mt-3" type="submit">
			{displayText}
		</button>
	);
}

export default SubmitInputComponent;
