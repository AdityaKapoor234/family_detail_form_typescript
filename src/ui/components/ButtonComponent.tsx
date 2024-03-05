function ButtonComponent({
	displayText,
	args = null,
	onClickHandler,
}: {
	displayText: string;
	args: unknown;
	onClickHandler: (args?: unknown) => void;
}) {
	return (
		<button
			className="btn btn-primary mt-3"
			onClick={() => {
				if (!args) {
					onClickHandler();
				} else {
					onClickHandler(args);
				}
			}}
		>
			{displayText}
		</button>
	);
}

export default ButtonComponent;
