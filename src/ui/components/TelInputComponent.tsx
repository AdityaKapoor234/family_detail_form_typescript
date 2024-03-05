function TelInputComponent({ labelName }: { labelName: String }) {
	return (
		<div className="mb-3">
			<label htmlFor="exampleInputEmail1" className="form-label">
				{labelName}
			</label>
			<input type="tel" className="form-control" />
		</div>
	);
}

export default TelInputComponent;
