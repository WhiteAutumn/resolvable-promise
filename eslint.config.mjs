// @ts-check

import autumn from '@autumn.dev/eslint-config';

export default [
	...autumn({
		typescript: true,
		strict:     process.env.STRICT === 'true'
	}),
	{
		ignores: [
			'dist/*'
		]
	}
];
