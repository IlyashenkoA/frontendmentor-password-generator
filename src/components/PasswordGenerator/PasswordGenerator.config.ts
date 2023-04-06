export const PASSWORD_INCLUDES = [
	{
		label: 'Include Uppercase Letters',
		type: 'upperCase',
	},
	{
		label: 'Include Lowercase Letters',
		type: 'lowerCase',
	},
	{
		label: 'Include Numbers',
		type: 'numbers',
	},
	{
		label: 'Include Symbols',
		type: 'symbols',
	},
];

export const DEFAULT_OPTIONS = [
	{
		id: 0,
		value: 'Too weak!',
		length: 1,
	},
	{
		id: 1,
		value: 'Weak',
		length: 2,
	},
	{
		id: 2,
		value: 'Medium',
		length: 3,
	},
	{
		id: 3,
		value: 'Strong',
		length: 4,
	},
];

export const STRENGTH_INDICATOR: {
	[key: string]: { length: number; class: string };
} = {
	'Too weak!': {
		length: 1,
		class: 'too-weak',
	},
	Weak: {
		length: 2,
		class: 'weak',
	},
	Medium: {
		length: 3,
		class: 'medium',
	},
	Strong: {
		length: 4,
		class: 'strong',
	},
};
