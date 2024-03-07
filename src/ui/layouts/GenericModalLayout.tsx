export type PropTypes = {
	children?: JSX.Element;
	titleText: string;
	isOpen: boolean;
	buttonText: string;
	closeModal: () => void;
};

function GenericModalLayout({
	children = <></>,
	titleText,
	isOpen = true,
	buttonText,
	closeModal,
}: PropTypes) {
	return (
		<dialog
			open={isOpen}
			style={{
				zIndex: 10000,
				height: '100%',
				width: '100%',
				position: 'fixed',
				top: '0',
				right: '0',
			}}
		>
			<div className="card">
				<div className="card-header">{titleText}</div>
				<div className="card-body">
					{children}
					<button
						className="btn btn-primary"
						onClick={() => {
							closeModal();
						}}
					>
						{buttonText}
					</button>
				</div>
			</div>
		</dialog>
	);
}

export default GenericModalLayout;
