type MaxLength = { value: number; message: string };

export type ValidationConstrainType = {
	required?: boolean | string;
	maxLength?: MaxLength;
};
