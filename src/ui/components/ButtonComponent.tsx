export type PropTypes = {
	displayText: string;
	args: unknown;
	onClickHandler: (args?: unknown) => void;
};

function ButtonComponent({
	displayText,
	args = null,
	onClickHandler,
}: PropTypes) {
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
