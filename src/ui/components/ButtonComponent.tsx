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
		<div className="m-5">
			<button
				className="btn btn-primary m-5"
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
		</div>
	);
}

export default ButtonComponent;
