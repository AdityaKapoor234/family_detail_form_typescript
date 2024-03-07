export type PropTypes<T> = {
	displayText: string;
	args?: T;
	onClickHandler: { (args?: T): void } | { (): void };
};

function ButtonComponent<T>({
	displayText,
	args = undefined,
	onClickHandler,
}: PropTypes<T>) {
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
